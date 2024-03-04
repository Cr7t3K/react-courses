const formatNumber = (number) => {
    // Convertir le nombre en une chaîne de caractères
    const numberString = number.toString();

    // Séparer la partie entière de la partie décimale (s'il y en a)
    const [integerPart, decimalPart] = numberString.split('.');

    // Ajouter une virgule comme séparateur de milliers à la partie entière
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Concaténer la partie entière formatée avec la partie décimale (si elle existe)
    return decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
};

export default formatNumber;