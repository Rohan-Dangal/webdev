// create a business name generator by combinig list of abjectives and shop name and another work
// abjectives               shopname              another word
// ->crazy                  -engine               =limited
// ->amazing                -foods                -bros
// ->funny                  -clothes              -hub
function adjectives()
{
    const random = Math.floor(Math.random() * 3);
    switch (random)
    {
        case 0:
            return "crazy";
        case 1:
            return "amazing";
            case 2:
                return "funny";
        default:
            return "invalid";    
    }
}
function shopname()
{
    const random = Math.floor(Math.random()* 3);
    switch(random)
    {
        case 0:
        return "engine";
        case 1:
        return "foods";
        case 2:
            return "clothes";
            default:
            return "invalid choice";
            
    }
}
function randomword()
{
    const random = Math.floor(Math.random()*3);
    switch(random){
        case 0:
            return "limited";
            case 1:
            return "bros";
            case 2: 
            return "hub";
            default:
            return "invalid choice";
            
    }
    
}
function businessnamegenerator()
{
    let adj = adjectives();
    let shop = shopname();
    let word = randomword();
    console.log(`The best business name is ${adj} ${shop} ${word}`);
}
businessnamegenerator();