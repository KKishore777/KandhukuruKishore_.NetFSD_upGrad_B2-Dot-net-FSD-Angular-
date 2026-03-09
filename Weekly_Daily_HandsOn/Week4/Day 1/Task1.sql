CREATE PROCEDURE sp_GetTotalSalesPerStore
AS
BEGIN
    SELECT 
        s.store_id,
        s.store_name,
        SUM(oi.quantity * oi.list_price) AS TotalSales
    FROM stores s
    INNER JOIN orders o 
        ON s.store_id = o.store_id
    INNER JOIN order_items oi 
        ON o.order_id = oi.order_id
    GROUP BY s.store_id, s.store_name
END

sp_GetTotalSalesPerStore
drop procedure  sp_GetTotalSalesPerStore