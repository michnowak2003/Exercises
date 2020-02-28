// You will be given a number and you will need to return it as a string in Expanded Form.For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

const expandedForm = num => {
    const numStr = num.toString().split('').reverse();
    let multiplier = 0.1;

    return (numStr.map(item => {
        multiplier *= 10;
        return item * multiplier
    }).filter(item => item !== 0).reverse().join(' + '))
}