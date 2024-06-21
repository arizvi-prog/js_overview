const str = 'some string'
const num = 10;
const bool = true;
const arr = ['John', 'Bob', 'Steve'];

const data = {
        name: 'Alisha',
        age: 44,
        info: {
          location: 'Atl',
          hobbies: [
            {
              name: 'Fishing',
              frequency: 1
            },
            {
              name: 'Pickleball',
              frequency: 2
            },
            {
              name: 'Another',
              frequency: 3
            }
          ]
        }
      };      

      console.log(data.info.hobbies[1].frequency)