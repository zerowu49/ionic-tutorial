Catatan:
- Add new contact berbentuk page dan berlokasi di url contacts/component/add-contact 
    Penambahan new contact dilakukan dengan menekan tombol tambah 
    di atas kanan dari url /contacts dan menggunakan template-driven
    yang mana akan dilakukan pengecekan terhadap data yang dimasukkan.
    Jika form tidak valid, maka tidak dilakukan penambahan kontak baru. 
    Jika form valid, maka dilakukan penambahan kontak baru lalu akan
    melakukan redirect ke halaman /contacts kembali.
- Edit contact terdapat pada detail contact dan berlokasi di url contacts/component/edit-contact/<id_contact>
    Pengeditan contact dilakukan dengan menekan tombol "Edit Contact" 
    di contact detail pada url /contacts/<id_contact> dan menggunakan 
    reactive-forms melakukan pengecekan secara back-end oleh angular
    terhadap data yang dimasukkan. Jika pengguna menekan tombol "Submit",
    maka data akan disave dan kembali ke halaman /contacts kembali.
- Data email dan telepon dibuat konstan sebesar 2 untuk tiap kontak.