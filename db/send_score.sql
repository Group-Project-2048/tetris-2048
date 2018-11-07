UPDATE overflow
SET
    score = $2,
    time_stamp = CURRENT_DATE
WHERE id = $1;