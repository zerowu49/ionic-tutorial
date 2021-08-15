const reasonInput = document.querySelector("#input-reason")
const amountInput = document.querySelector("#input-amount")
const cancelBtn = document.querySelector("#btn-cancel")
const confirmBtn = document.querySelector("#btn-confirm")
const expensesList = document.querySelector("#expenses-list")
const totalExpenseOutput = document.querySelector("#total-expenses")

let totalExpenses = 0

const clear = () => {
    reasonInput.value = ''
    amountInput.value = ''
}

async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Invalid Inputs';
    alert.message = 'Please enter valid reason and amount!';
    alert.buttons = [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
            console.log('Confirm Cancel');
        }
    }, {
        text: 'Okay',
        handler: () => {
            console.log('Confirm Okay')
        }
    }];
    document.body.appendChild(alert);
    await alert.present();

    const {
        role
    } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
}


confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value
    const enteredAmount = amountInput.value
    if (
        enteredReason.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim().length <= 0
    ) {
        presentAlert()
        return;
    }
    const newItem = document.createElement('ion-item')
    newItem.textContent = enteredReason + ': $' + enteredAmount
    expensesList.appendChild(newItem)
    totalExpenses += +enteredAmount
    totalExpenseOutput.textContent = totalExpenses
    clear()
})

cancelBtn.addEventListener('click', clear)