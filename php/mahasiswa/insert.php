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
	$input = file_get_contents('php://input');
	$data = json_decode($input, true);
	$message = array();

	$nim = $data['nim'];
	$nama = $data['nama'];
	$prodi = $data['prodi'];

	$sql = "INSERT INTO `mahasiswa` (`nim`, `nama`, `prodi`) VALUES ('{$nim}', '{$nama}', '{$prodi}')";
	$q = $koneksi->query($sql);

	if($q){
		$message['status'] = "success";
	}else{
		$message['status'] = mysqli_error($koneksi);
	}

	mysqli_close();
	echo json_encode($message);
}