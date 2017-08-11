<?php


$currentPage = Input::get('page', 1);

function getCurrentPage($currentPage)
{
	if (isset($_GET['currentpage']) && is_numeric($_GET['currentpage'])) {
	   $currentpage = (int) $_GET['currentpage'];
	} else {
	   $currentpage = 1;
	} 
}


function getPreviousPage($currentPage)
{
	if ($currentPage != 1){

	}
	

}



