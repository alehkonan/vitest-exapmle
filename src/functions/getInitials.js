export function getInitials(fullName) {
  const letters = [...fullName];
  return letters.filter((letter) => /[A-Z]/.test(letter));
}
