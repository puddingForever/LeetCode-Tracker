
select month
     , country
     , trans_count
     , approved_count
     , trans_total_amount
     , approved_total_amount 
from (
  select to_char(ot.trans_date,'YYYY-MM') as month 
       , ot.country
       , (
            select count(*) 
              from transactions t 
             where to_char(t.trans_date,'YYYY-MM') = to_char(ot.trans_date,'YYYY-MM')
               and (
                     t.country = ot.country  OR 
                     (t.country IS NULL AND ot.country IS NULL)
                    )
       ) as trans_count
       , ( 
            select count(*) 
              from transactions t 
             where t.state = 'approved' 
               and to_char(t.trans_date,'YYYY-MM') = to_char(ot.trans_date,'YYYY-MM')
                and (
                     t.country = ot.country  OR 
                     (t.country IS NULL AND ot.country IS NULL)
                    ) 
       ) as approved_count
       , ( 
            select NVL(sum(t.amount),0)
              from transactions t 
             where to_char(t.trans_date,'YYYY-MM') = to_char(ot.trans_date,'YYYY-MM')
               and (
                     t.country = ot.country  OR 
                     (t.country IS NULL AND ot.country IS NULL)
                    ) 
       ) as trans_total_amount
        , ( 
            select NVL(sum(t.amount),0)
              from transactions t 
             where to_char(t.trans_date,'YYYY-MM') = to_char(ot.trans_date,'YYYY-MM')
                and (
                     t.country = ot.country  OR 
                     (t.country IS NULL AND ot.country IS NULL)
                    )  
               and t.state = 'approved' 
       ) as approved_total_amount 
    from Transactions ot
    group by to_char(ot.trans_date,'YYYY-MM')
           , ot.country 
);