CREATE TRIGGER trg_AutoUpdateStock
ON order_items
AFTER INSERT
AS
BEGIN
    BEGIN TRY

        -- Check if stock is insufficient
        IF EXISTS
        (
            SELECT 1
            FROM inserted i
            JOIN orders o 
                ON i.order_id = o.order_id
            JOIN stocks s 
                ON s.product_id = i.product_id 
                AND s.store_id = o.store_id
            WHERE s.quantity < i.quantity
        )
        BEGIN
            RAISERROR ('Insufficient stock available for the product.',16,1);
            ROLLBACK TRANSACTION;
            RETURN;
        END

        -- Reduce stock quantity
        UPDATE s
        SET s.quantity = s.quantity - i.quantity
        FROM stocks s
        JOIN inserted i 
            ON s.product_id = i.product_id
        JOIN orders o 
            ON i.order_id = o.order_id
        WHERE s.store_id = o.store_id;

    END TRY

    BEGIN CATCH
        ROLLBACK TRANSACTION;

        DECLARE @ErrorMessage NVARCHAR(4000);
        SET @ErrorMessage = ERROR_MESSAGE();

        RAISERROR(@ErrorMessage,16,1);
    END CATCH
END;

INSERT INTO orders
(customer_id,order_status,order_date,required_date,store_id,staff_id)
VALUES
(1,1,GETDATE(),GETDATE(),1,1)


SELECT * 
FROM stocks
WHERE product_id = 5;