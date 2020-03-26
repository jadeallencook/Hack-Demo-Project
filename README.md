# Hack Demo Application

## Getting Started

From the root of this project run: 

``` npm start ```

This will launch the React site at **localhost:3000**

Then change your PWD to the "api" directory and run:

``` hhvm -m server -p 8080 ```

To launch your HHVM server at **localhost:8080**

## Create A Database

You'll need to install Postgres.app at this website: 

[https://postgresapp.com/](https://postgresapp.com/)

Once you've created a database, create a new table.

```sql
CREATE TABLE fy20 (
    id SERIAL PRIMARY KEY,
    jan_travel_actual integer,
    jan_travel_forecast integer,
    jan_services_actual integer,
    jan_services_forecast integer,
    jan_caspex_actual integer,
    jan_caspex_forecast integer,
    jan_other_actual integer,
    jan_other_forecast integer,
    apr_travel_actual integer,
    apr_travel_forecast integer,
    apr_services_actual integer,
    apr_services_forecast integer,
    apr_caspex_actual integer,
    apr_caspex_forecast integer,
    apr_other_actual integer,
    apr_other_forecast integer,
    aug_travel_actual integer,
    aug_travel_forecast integer,
    aug_services_actual integer,
    aug_services_forecast integer,
    aug_caspex_actual integer,
    aug_caspex_forecast integer,
    aug_other_actual integer,
    aug_other_forecast integer,
    oct_travel_actual integer,
    oct_travel_forecast integer,
    oct_services_actual integer,
    oct_services_forecast integer,
    oct_caspex_actual integer,
    oct_caspex_forecast integer,
    oct_other_actual integer,
    oct_other_forecast integer
);
```

You'll then need to update ```config.hack``` in ```/api```.