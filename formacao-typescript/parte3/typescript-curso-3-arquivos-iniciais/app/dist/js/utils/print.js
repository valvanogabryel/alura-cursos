export function print(...objs) {
    objs.forEach(obj => {
        console.log(obj.toText());
    });
}
