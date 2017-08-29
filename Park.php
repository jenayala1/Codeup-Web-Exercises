<?php

require_once "Model.php";

class Park extends Model
{
    ///////////////////////////////////
    // Static Methods and Properties //
    ///////////////////////////////////

    //  * our connection to the database

    public static $connection = null;
    public static $table ="nationl_parks";
    // public static $parks = 'national_parks';

    //  * establish a database connection if we do not have one (commented out after creating db connect in the Model class)
    //public static function dbConnect()
    // {
    //     require 'db_connect.php';
    //
    //     if (! is_null(self::$connection)) {
    //         return;
    //     }
    //     self::$connection = $connection;
    // }

    /** * returns the number of records in the database*/
    public static function count() {
        // TODO: call dbConnect to ensure we have a database connection  // TODO: use the $dbc static property to query the database for the
        //       number of existing park records
        self::dbConnect();
        $stmt = self::$connection->query("SELECT count(id) FROM national_parks");
        $count = $stmt->fetch(PDO::FETCH_NUM);
        return $count[0];
    }

    public static function all()  //  returns all the records
    {
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to query the database for all the
        //       records in the parks table
        // TODO: iterate over the results array and transform each associative
        //       array into a Park object
        // TODO: return an array of Park objects
        self::dbConnect();
        $query = "SELECT * FROM national_parks";
        $stmt = self::$connection->query($query);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $parks = [];
        foreach($results as $result){
            $park = new Park();
            $park->id = $result['id'];
            $park->name = $result['name'];
            $park->location = $result['location'];
            $park->date_established = $result['date_established'];
            $park->area_in_acres = $result['area_in_acres'];
            $park->description = $result['description'];
            $parks[] = $park;
        }
        return $parks;
    }

    public static function paginate($page, $resultsPerPage = 4) {

            self::dbConnect();
            $limit = $resultsPerPage;
            $offset = ($page * $resultsPerPage) - $resultsPerPage;

            $paginateQuery = "SELECT * from national_parks ORDER BY name LIMIT :limit OFFSET :offset";
            $preparedStmt = self::$connection->prepare($paginateQuery);
            $preparedStmt->bindValue(':limit', (int)$limit, PDO::PARAM_INT);
            $preparedStmt->bindValue(':offset', (int)$limit, PDO::PARAM_INT);
            $preparedStmt->execute();

            $results =  $preparedStmt->fetchAll(PDO::FETCH_ASSOC);
            $ouput = [];

            foreach($results as $result) {
                $park = new Park();
                $park->id = $result['id'];
                $park->name = $result['name'];
                $park->location = $result['location'];
                $park->date_established = $result['date_established'];
                $park->area_in_acres = $result['area_in_acres'];
                $park->description = $results['description'];

                $output[] = $park;
            }
            return $output;
    }

    /////////////////////////////////////
    // Instance Methods and Properties //
    /////////////////////////////////////

    public $id;
    public $name;
    public $location;
    public $date_established;
    public $area_in_acres;
    public $description;

    protected function insert() {
        self:: dbConnect();

        $newPark = ('INSERT INTO national_parks (name, location, date_established, area_in_acres, description) VALUES (:name, :location, :date_established, :area_in_acres, :description)');
        $stmt = self::$connection->prepare($newPark);
        $stmt->bindValue(':name', $this->name, PDO::PARAM_STR);
        $stmt->bindValue(':location', $this->location, PDO::PARAM_STR);
        $stmt->bindValue(':date_established', $this->date_established, PDO::PARAM_STR);
        $stmt->bindValue(':area_in_acres', $this->area_in_acres, PDO::PARAM_INT);
        $stmt->bindValue(':description', $this->description, PDO::PARAM_STR);
        $stmt->execute();

        $this->id = self::$connection->lastInsertId();

    }

    protected function update()
    {
        self::dbConnect();

        $update = "UPDATE " . static::$table .  "SET
            name=:name,
            location=:location,
            date_established=:date_established,
            area_in_acres=:area_in_acres,
            description=:description
            WHERE id=:id";

            $stmt = self::$connection>prepare($update);

            $stmt->bindValue(':name', $this->name, PDO::PARAM_STR);
            $stmt->bindValue(':location', $this->location, PDO::PARAM_STR);
            $stmt->bindValue(':date_established', $this->date_established, PDO::PARAM_STR);
            $stmt->bindValue(':area_in_acres', $this->area_in_acres, PDO::PARAM_STR);
            $stmt->bindValue(':description', $this->description, PDO::PARAM_STR);
            $stmt->bindValue(':id',$this->id, PDO::PARAM_INT);
            $stmt->execute();
        }

        public static function find($id)
        {
            self::dbConnect();
            $query = "SELECT  *  FROM" . static::$table . " where id = :id";
            $statement = self::$connection->prepare($query);
            $statement->bindValue('id', $id, PDO::PARAM_INT);
            $statement->execute();
            $result = $statement->fecth(PDO::FETCH_ASSOC);
            $park = new Park($result);
            return $park;
        }
}
