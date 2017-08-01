function pageController()
{
   
    $counter = isset($_GET['counter']) ? $_GET['counter'] : 'Nothing provided';;

    $count = 0;
        // foreach ($counter as $value) 
        // {
        //     if($up) {
        //         $count++;
        //     }
        //     elseif($down){
        //         $count--;
        //     }
        // }

        return $counter = [
            'up' => $up,
            'down' => $down
        ];
}
extract(pageController());


?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP + HTML</title>
    </head>
    <body>

        <h1 class="counter"></h1>
        <label> Counter:
            <input type="text" name="counter" />
            
        </label>
       

    </body>
</html>