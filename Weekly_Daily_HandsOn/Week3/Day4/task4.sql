USE ecommappdb;
GO

-- Create Archived Orders Table
SELECT *
INTO archived_orders
FROM orders
WHERE 1 = 0;
GO

-- Insert Archived Orders
INSERT INTO archived_orders
SELECT *
FROM orders
WHERE order_status = 3
AND order_date < DATEADD(YEAR, -1, GETDATE());
GO

-- Delete Rejected Orders older than one year
DELETE FROM orders
WHERE order_status = 3
AND order_date < DATEADD(YEAR, -1, GETDATE());
GO

-- Customers whose all orders are completed
SELECT customer_id
FROM orders
GROUP BY customer_id
HAVING COUNT(*) =
(
    SELECT COUNT(*)
    FROM orders o2
    WHERE o2.customer_id = orders.customer_id
    AND o2.order_status = 4
);
GO

-- Order Processing Delay
SELECT 
    order_id,
    DATEDIFF(DAY, order_date, shipped_date) AS processing_delay
FROM orders;
GO

-- Mark Orders as Delayed or On Time
SELECT 
    order_id,
    order_date,
    required_date,
    shipped_date,
    CASE
        WHEN shipped_date > required_date THEN 'Delayed'
        ELSE 'On Time'
    END AS delivery_status
FROM orders;
GO