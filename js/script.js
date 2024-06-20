        // Javascript works wiht or has a set of different values
        // A word or multiple words wrapped in quotes is called a String value type
        // A number is called a Number value type

        // Primitive Value Types
        var firstName = 'Alisha'; // String
        var lastName = 'Rizvi'
        var age = 44; // Number
        var names = ['John' , 'Ann' , 'Bob' , 'Frank' , 'Jane' , 'Jimmy' , 'Billy' , 'Julie' , 'Will'];

        // Comparison Operators - Return a boolean based on the result of your comparison
        // console.log(age > 30);
        // console.log(age < 30);
        // console.log(age == 44);
        // console.log(age == '44'); 
        // // Double equal checks only value
        // console.log(age === 44);
        // // Triple equals check both value and type

        // console.log(age>= 40);
        // console.log(age<= 40);

        // console.log(age != 43);
        // console.log(age !== 43);

        // Falsey Values
        // 0, null, undefined, '', NaN, false

        // Logical Operators - Return a value on the left or right side of the operator
        // Which value is equated is based on truth (thruthy vs falsey)
        // console.log(0 || null || '' || -5 || undefined);
        // // If anyone of these is true, then perform some action

        // console.log(1 && age && 100 && null);

        // console.log(!'');

        var firstName = 'Alisha'; // String
        var lastName = 'Rizvi'
        var age = 44; // Number
        var names = ['John' , 'Ann' , 'Bob' , 'Frank' , 'Jane' , 'Jimmy' , 'Billy' , 'Julie' , 'Will'];
        var users = ['Bob' , 99, 'Ann' , 35, 'Billy' , 45]
        var oldEnough = age >= 21; // true

        // Conditionals - trigger if the VALUE is a truthy value to the parentheses is a truthy value
        if (firstName && lastName) {
                console.log('Received your full name!');
        } else if (!firstName) {
                console.log('You must provide your full name!');
        } else if (!lastName) {
                console.log("You must provide your last name!")
        }
        else {
                console.log('You must provide your full name!');
        } 
        
        if (oldEnough) {
                console.log('Welcome');
                // Web API - Browser Toolset that we can access from within our JS
                alert('Welcome ' + firstName);
        } else {
                console.log('They cannot enter');
                alert('No chance...');
        }
        
 



