BEGIN TRY

    BEGIN TRANSACTION

    -- Temporary table to store revenue per order
    CREATE TABLE #OrderRevenue
    (
        order_id INT,
        store_id INT,
        revenue DECIMAL(12,2)
    )

    DECLARE @order_id INT
    DECLARE @store_id INT
    DECLARE @revenue DECIMAL(12,2)

    -- Cursor to get completed orders
    DECLARE order_cursor CURSOR FOR
    SELECT order_id, store_id
    FROM orders
    WHERE order_status = 4

    OPEN order_cursor

    FETCH NEXT FROM order_cursor INTO @order_id, @store_id

    WHILE @@FETCH_STATUS = 0
    BEGIN

        -- Calculate revenue for current order
        SELECT @revenue =
        SUM(quantity * list_price * (1 - discount))
        FROM order_items
        WHERE order_id = @order_id

        -- Insert into temporary table
        INSERT INTO #OrderRevenue
        VALUES (@order_id, @store_id, @revenue)

        FETCH NEXT FROM order_cursor INTO @order_id, @store_id

    END

    CLOSE order_cursor
    DEALLOCATE order_cursor

    -- Store-wise revenue summary
    SELECT 
        store_id,
        SUM(revenue) AS total_store_revenue
    FROM #OrderRevenue
    GROUP BY store_id

    COMMIT TRANSACTION

END TRY

BEGIN CATCH

    ROLLBACK TRANSACTION

    DECLARE @ErrorMessage NVARCHAR(4000)
    SET @ErrorMessage = ERROR_MESSAGE()

    RAISERROR(@ErrorMessage,16,1)

END CATCH

SELECT order_id, customer_id
FROM orders
WHERE store_id=2