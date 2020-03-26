<<__EntryPoint>>
function main(): void {
    require_once '../config.hack';
    $query = "SELECT * FROM fy20";
    $myPDO = new PDO("pgsql:host=$HOST;port=$PORT;dbname=$DBNAME", $USER, $PASS);
    $result = $myPDO->query($query);
    if (!$result) {
        die("Error executing the query: $query");
    }
    foreach ($result as $row) {
        echo json_encode($row);
    } 
    exit(0);
}