import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  settings = {
    includeLetter: false,
    includeNumber: false,
    includeSymbol: false,
    passwordLength: 0
  };

  // this.options = {
  //   "includeLetter" : false,
  //   ""
  // };

  password = '';

  onChangeLength(value: string) {
    const userInput = parseInt(value);
    //console.log(userInput);
    if (!isNaN(userInput)) {
      this.settings.passwordLength = userInput;
    } else {
      this.settings.passwordLength = 0;
    }

    //console.log(value.target.value);
  }

  onChangeUseLetters() {
    this.settings.includeLetter = !this.settings.includeLetter;
  }

  onChangeUseNumber() {
    this.settings.includeNumber = !this.settings.includeNumber;
  }

  onChangeUseSymbol() {
    this.settings.includeSymbol = !this.settings.includeSymbol;
  }

  addChars(isAllowed: boolean, value: string) {
    if (isAllowed) {
      return value;
    } else {
      return '';
    }
  }

  disableButton() {
    return (
      this.settings.passwordLength &&
      (this.settings.includeLetter ||
        this.settings.includeNumber ||
        this.settings.includeSymbol)
    );
  }

  onButtonClick() {
    console.log(this.settings);
    let validChars = '';
    let letters = 'qwertyuiopasdfghjklzxcvbnm';
    let numbers = '1234567890';
    let symbols = '!@#$%^&*()_+';
    let generatedPassword = '';

    validChars += this.addChars(this.settings.includeLetter, letters);
    validChars += this.addChars(this.settings.includeNumber, numbers);
    validChars += this.addChars(this.settings.includeSymbol, symbols);
    for (let i = 0; i < this.settings.passwordLength; i++) {
      generatedPassword +=
        validChars[Math.floor(Math.random() * validChars.length)];
    }
    this.password = generatedPassword;
  }
}
