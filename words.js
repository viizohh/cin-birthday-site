// Uncommon words with definitions for word of the day
const uncommonWords = [
    { word: "ephemeral", definition: "lasting for a very short time; fleeting" },
    { word: "effervescent", definition: "vivacious and enthusiastic; bubbling" },
    { word: "serendipity", definition: "finding something good without looking for it" },
    { word: "mellifluous", definition: "sweet or musical; pleasant to hear" },
    { word: "petrichor", definition: "the pleasant smell after rain" },
    { word: "luminous", definition: "full of or shedding light; bright or shining" },
    { word: "ethereal", definition: "extremely delicate and light; heavenly" },
    { word: "halcyon", definition: "denoting a period of time in the past that was idyllically happy" },
    { word: "ineffable", definition: "too great or extreme to be expressed in words" },
    { word: "sonder", definition: "the realization that each passerby has a life as vivid as your own" },
    { word: "eloquence", definition: "fluent or persuasive speaking or writing" },
    { word: "quintessential", definition: "representing the most perfect example of something" },
    { word: "ebullient", definition: "cheerful and full of energy" },
    { word: "luminescence", definition: "light produced by chemical, electrical, or physiological means" },
    { word: "ephemera", definition: "things that exist or are used for only a short time" },
    { word: "sonorous", definition: "capable of producing a deep or ringing sound" },
    { word: "sempiternal", definition: "eternal and unchanging; everlasting" },
    { word: "numinous", definition: "having a strong religious or spiritual quality" },
    { word: "incandescent", definition: "emitting light as a result of being heated; passionate" },
    { word: "gossamer", definition: "something very light, thin, and insubstantial" },
    { word: "surreptitious", definition: "kept secret, especially because it would not be approved" },
    { word: "melancholy", definition: "a deep, pensive sadness" },
    { word: "etherealize", definition: "to make extremely delicate or refined" },
    { word: "effulgent", definition: "shining brightly; radiant" },
    { word: "reverie", definition: "a state of being pleasantly lost in one's thoughts" },
    { word: "lassitude", definition: "a state of physical or mental weariness" },
    { word: "equanimity", definition: "mental calmness and evenness of temper" },
    { word: "somnolent", definition: "sleepy or drowsy" },
    { word: "redolent", definition: "strongly reminiscent or suggestive of something" },
    { word: "bucolic", definition: "relating to pleasant aspects of the countryside" },
    { word: "insouciant", definition: "showing casual lack of concern" },
    { word: "languid", definition: "displaying or having a lack of energy" },
    { word: "lissome", definition: "thin, supple, and graceful" },
    { word: "laconic", definition: "using very few words" },
    { word: "dulcet", definition: "sweet and soothing" },
    { word: "vestigial", definition: "forming a very small remnant of something" },
    { word: "penumbra", definition: "the partially shaded outer region of a shadow" },
    { word: "umbra", definition: "the fully shaded inner region of a shadow" },
    { word: "ephemeron", definition: "a thing that lasts for only a day" },
    { word: "ensorcell", definition: "to enchant or fascinate someone" },
    { word: "susurrus", definition: "a whispering or rustling sound" },
    { word: "sibilant", definition: "making a hissing sound" },
    { word: "felicity", definition: "intense happiness" },
    { word: "sempervivum", definition: "a plant that lives forever" },
    { word: "phosphorescent", definition: "light emitted by a substance without heat" },
    { word: "iridescent", definition: "showing luminous colors that change when seen from different angles" },
    { word: "opalescent", definition: "showing varying colors as an opal does" },
    { word: "nacreous", definition: "relating to or resembling mother-of-pearl" },
    { word: "diaphanous", definition: "light and delicate enough to see through" },
    { word: "gossamer", definition: "used to refer to something very light or delicate" }
];

// Get word of the day based on current date
function getWordOfDay() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const index = dayOfYear % uncommonWords.length;
    return uncommonWords[index];
}
