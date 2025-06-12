//write a js program to create a word-meaning dictionary of 5 words.
const dictionary =
{
benevolent: {
meaning: "kind and generous",
example: "a benevolent smile",
},
inevitable:
{
    meaning:"Sure to happen; unavoidable",
    example: "The inevitable consequences of the decision",
},
serendipity: {
    meaning: "The occurrence of events by chance in a happy or beneficial way",
    example: "Finding a $20 bill on the ground was pure serendipity",
},
ephemeral: {
    meaning: "Lasting for a very short time",
    example: "Fame is ephemeral",
},
sonder: {
    meaning: "The realization that each random passerby is living a life as vivid and complex as your own",
    example: "Walking through the city, I felt a sense of sonder as I observed the diverse lives around me",
},
    "limerence": {
        meaning: "The state of being infatuated or obsessed with another person, typically experienced involuntarily",
        example: "Her limerence for him was evident in the way she blushed whenever he entered the room",
    }
};
for (const word in dictionary)
{
    console.log(`word:${word}`)
    console.log(`meaning:${dictionary[word].meaning}`);
    console.log(`example:${dictionary[word].example}`);
}
