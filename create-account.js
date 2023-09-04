function createAccount(pin, amount = 0) {
  return {
    checkBalance(userPin) {
      if (userPin === pin) {
        return `$${amount}`;
      }
      return "Invalid PIN.";
    },

    deposit(userPin, userAmt) {
      if (userPin === pin) {
        amount = amount + userAmt;
        return `Successfully deposited $${userAmt}. Current balance: $${amount}.`;
      }
      return "Invalid PIN.";
    },

    withdraw(userPin, userAmt) {
      if (userPin === pin) {
        if (userAmt > amount) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        } else {
          amount = amount - userAmt;
          return `Successfully withdrew $${userAmt}. Current balance: $${amount}.`;
        }
      }
      return "Invalid PIN.";
    },

    changePin(userPin, newPin) {
      if (userPin === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      }
      return "Invalid PIN.";
    },
  };
}
module.exports = { createAccount };
