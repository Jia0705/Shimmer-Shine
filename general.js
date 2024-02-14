window.onload = init;

function init() {
    var Today = new Date();
    document.getElementById('date').value = Today.getDate() + "/" + (Today.getMonth() + 1) + "/" + Today.getFullYear();
    document.getElementById('customerName').focus();


    document.forms[0].onsubmit = function () {
        if (this.checkValidity()) {
            if (document.getElementById('totalAmount').value > 0) {
                if (confirm("Are sure that you would like to submit the shoes order?") == 1) {
                    name = document.getElementById('customerName').value;
                    alert(name + " , your order has been successfully submitted. You may recieve your order items within 10 days. ")
                    window.print();
                    return true;
                }
            } else {
                alert("Total Amount is invalid");
                return false;
            }
        }
    }
}