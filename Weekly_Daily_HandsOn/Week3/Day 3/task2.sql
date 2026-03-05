SELECT product_id,store_id,quantity AS available_stock_quantity
FROM stocks WHERE quantity >= 0
ORDER BY product_id;