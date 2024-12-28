function password(length,includespecialChar){
    function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
        const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const specialChars = "@#$%^&*()_+[]{}!?";
    
        let requiredCharacters = upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
        let allCharacters = upperCaseLetters + lowerCaseLetters;
    
        if (includeNumbers) {
            requiredCharacters += numbers[Math.floor(Math.random() * numbers.length)];
            allCharacters += numbers;
        }
    
        if (includeSpecialChars) {
            requiredCharacters += specialChars[Math.floor(Math.random() * specialChars.length)];
            allCharacters += specialChars;
        }
    
        for (let i = requiredCharacters.length; i < length; i++) {
            requiredCharacters += allCharacters[Math.floor(Math.random() * allCharacters.length)];
        }
    
        return requiredCharacters.split('').sort(() => Math.random() - 0.5).join('');
    }
    
    console.log(generatePassword(10, true, true));
    console.log(generatePassword(8));
    console.log(generatePassword(12, false));
    
    
}