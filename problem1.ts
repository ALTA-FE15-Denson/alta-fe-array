function compareString(a: string, b: string): string {
  // your code here
  let commonSubstring = ''

  for (let i = 0; i < a.length; i++) {
    for (let j = i; j <= a.length; j++) {
      let substring = a.substring(i, j)
      //include mengecek apakah nilai dari substring ada semua di dalam b atau tidak
      if (b.includes(substring) && substring.length > commonSubstring.length) {
        commonSubstring = substring
      }
    }
  }

  return commonSubstring
}

console.log(compareString('AKA', 'AKASHI')) // AKA
console.log(compareString('KANGAROO', 'KANG')) // KANG
console.log(compareString('KI', 'KIJANG')) // KI
console.log(compareString('KUPU-KUPU', 'KUPU')) // KUPU
console.log(compareString('ILALANG', 'ILA')) // ILA
