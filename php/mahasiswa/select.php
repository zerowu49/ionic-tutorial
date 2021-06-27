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
	$sql = "SELECT * FROM mahasiswa";
	$hasil = $koneksi->query($sql);

	$mahasiswa = array();
	if($hasil->num_rows > 0){
		while($row = $hasil->fetch_assoc()){
			array_push($mahasiswa, $row);
		}
		echo json_encode($mahasiswa);
	}else{
		echo "0 results";
	}

	$koneksi->close();
}