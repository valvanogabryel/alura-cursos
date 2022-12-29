export default function isOfAge(field) {
    const birthDate = new Date(field.value);
    return validadeAge(birthDate);
}

function validadeAge(date) {
    const currentDate = new Date();
    const over18Date = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return currentDate >= over18Date;
}