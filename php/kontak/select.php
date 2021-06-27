<?php
if(isset($_SERVER['HTTP_ORIGIN'])){
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST, PUT, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
}

$koneksi = mysqli_connect('127.0.0.1', 'root', '', 'umn_if733_2020');
if($koneksi->connect_error){
	die("Koneksi gagal: " . $koneksi->connect_error);
}else{
	if (isset($_GET['id'])) {
		$sql = "SELECT * FROM kontak WHERE id = {$_GET['id']}";
    } else {
        $sql = "SELECT * FROM kontak";
	}
	$hasil = $koneksi->query($sql);

	$contact = array();
	if($hasil->num_rows > 0){
		while($row = $hasil->fetch_assoc()){
			array_push($contact, $row);
		}
		echo json_encode($contact);
	}else{
		echo "0 results";
	}

	$koneksi->close();
}