insert into overflow
(
    name,
    score,
    time_stamp
)
values
(
    $1,
    $2,
    CURRENT_DATE
)

RETURNING *;
