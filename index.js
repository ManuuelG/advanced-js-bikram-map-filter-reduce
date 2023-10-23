//RESUELVE LOS EJERCICIOS AQUI

//1//

function elevados(numbers) {
    const cuadrados = numbers.map(function(numero) {
        return Math.pow(numero, 2); 
    });
    return cuadrados;
}

const numbers = [4, 5, 6, 7, 8, 9, 10];
const cuadrados = elevados(numbers);
console.log(cuadrados);

//2//

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']

const result2 = []

foodList.map((comida) => {
if (comida === foodList[0]) {
    return result2.push (`Como soy de Italia, amo comer ${foodList[0]}`)
} else if (comida === foodList[1]) {
    return result2.push(`Como soy de Japon, amo comer ${foodList[1]}`)
} else if (comida === foodList[2]) {
    return result2.push(`Como soy de Valencia, amo comer ${foodList[2]}`)
} else {
    return result2.push(`Aunque no como carne, el ${foodList[3]} es sabroso`)
}
})

console.log(result2)

// 3//

const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];

  const result3 = []

  staff.forEach((item) => {
   
    const descripcion = `${item.name} es ${item.role} y le gusta ${item.hobbies.join(' y ')}`
    result3.push(descripcion)
})

console.log(result3)

// 4 //

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(numero => 
    numero % 2 === 1)

console.log(result4)

// 5 //

const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];

    const result5 = foodList2.filter(food => food.isVeggie  &&  `Que rico ${food.name} me voy a comer!,
    Que rica ${food.name} me voy a comer!`

    )

    console.log(result5)

    //6//

    const inventory = [
      {
        name: 'Mobile phone',
        price: 199
      },
      {
        name: 'TV Samsung',
        price: 459
      },
      {
        name: 'Viaje a cancún',
        price: 600
      },
      {
        name: 'Mascarilla',
        price: 1
      }
    ];
    
    /*
      [
        'TV Samsung,',
        'Viaje a Cancún'
      ]
    */

      const result = inventory.filter(inventory => inventory.price > 300)
      console.log(result)

      //REDUCE//

      //6//

      const numeros = [39, 2, 4, 25, 62]


      const multiplicacion = numeros.reduce((accumulator,currentValue) => accumulator * currentValue)

      console.log(multiplicacion)

      //7//

      const sentenceElements = [
        'Me', 
        'llamo',
        'Manuel',
        'y',
        'quiero',
        'sentir',
        'la',
        'fuerza',
        'con',
        'javascript'
      ];

      const concatenacion = sentenceElements.reduce((palabras, suma) => palabras + ' ' + suma)

      console.log(concatenacion)

      //8//

      const books = [
        {
          name: ' JS for dummies',
          author: 'Emily A. Vander Veer',
          price: 20,
          category: 'code'
        },
        {
          name: 'Don Quijote de la Mancha',
          author: 'Cervantes',
          price: 14,
          category: 'novel'
        },
        {
          name: 'Juego de tronos',
          author: 'George R. Martin',
          price: 32,
          category: 'Fantasy'
        },
        {
          name: 'javascript the good parts',
          author: 'Douglas Crockford',
          price: 40,
          category: 'code'
        }
      ];

      const codeBooks = books.filter(books => books.category === 'code')

      const codePrices = codeBooks.map(function (item) {
        const prices = item.price
        return prices
      })

      const suma = codePrices.reduce((suma,precio) => suma + precio)

      console.log(suma)
      
    

  




 