const EnterString = (input) => {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let uppercase = input.toUpperCase();
        result += `${i}${uppercase[i]}`;
    }
    return result; 
};


const InputString = prompt("Enter the string");
if (InputString) {
  
    document.write(EnterString(InputString));
}