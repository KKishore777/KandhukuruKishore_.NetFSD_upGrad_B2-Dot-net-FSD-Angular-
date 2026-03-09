SELECT 
    c.first_name + ' ' + c.last_name AS full_name,
    SUM(oi.quantity * oi.list_price) AS total_order_value,
    'Customer With Orders' AS customer_type
FROM customers c
INNER JOIN orders o  ON c.customer_id = o.customer_id
INNER JOIN order_items oi  ON o.order_id = oi.order_id
GROUP BY c.first_name, c.last_name
UNION SELECT first_name + ' ' + last_name, NULL, 'No Orders'
FROM customers
WHERE customer_id NOT IN (SELECT customer_id FROM orders);