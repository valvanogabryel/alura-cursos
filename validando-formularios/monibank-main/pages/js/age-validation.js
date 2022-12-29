export default function isOfAge(field) {
    const birthDate = new Date(field.value);
    if (!validadeAge(birthDate)) {
        field.setCustomValidity('O usuário não é maior de idade');
    };
}

function validadeAge(date) {
    const currentDate = new Date();
    const over18Date = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return currentDate >= over18Date;
}