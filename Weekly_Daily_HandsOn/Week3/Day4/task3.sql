USE ecommappdb;
GO

SELECT 
    s.store_name,
    p.product_name,
    SUM(sales.quantity) AS total_quantity_sold,
    SUM((sales.quantity * sales.list_price) - sales.discount) AS total_revenue
FROM
(
    SELECT 
        o.store_id, 
        oi.product_id, 
        oi.quantity, 
        oi.list_price, 
        oi.discount
    FROM orders o
    INNER JOIN order_items oi 
        ON o.order_id = oi.order_id
) AS sales
INNER JOIN stores s 
    ON sales.store_id = s.store_id
INNER JOIN products p 
    ON sales.product_id = p.product_id
GROUP BY 
    s.store_name, 
    p.product_name;