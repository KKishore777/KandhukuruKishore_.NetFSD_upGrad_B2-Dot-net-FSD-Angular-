CREATE TRIGGER trg_ValidateOrderCompletion
ON orders
AFTER UPDATE
AS
BEGIN
    BEGIN TRY

        -- Check if order_status is set to Completed but shipped_date is NULL
        IF EXISTS
        (
            SELECT 1
            FROM inserted
            WHERE order_status = 4 
            AND shipped_date IS NULL
        )
        BEGIN
            RAISERROR ('Order cannot be marked as Completed without a shipped date.',16,1);
            ROLLBACK TRANSACTION;
            RETURN;
        END

    END TRY

    BEGIN CATCH
        ROLLBACK TRANSACTION;

        DECLARE @ErrorMessage NVARCHAR(4000);
        SET @ErrorMessage = ERROR_MESSAGE();

        RAISERROR(@ErrorMessage,16,1);
    END CATCH
END;


select * from 
orders WHERE order_status = 4 AND shipped_date IS NULL

UPDATE orders
SET order_status = 4
WHERE order_id = 1;

UPDATE orders
SET order_status = 4,
    shipped_date = GETDATE()
WHERE order_id = 1;