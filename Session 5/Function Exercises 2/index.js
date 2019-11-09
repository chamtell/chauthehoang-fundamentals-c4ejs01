function calculateSupply(CurrentAge, MaximumAge, AmountPerDay, Aroundlive, year = 365) {
    CurrentAge = Number(prompt("ENTER YOUR CURRENT AGE"))
    MaximumAge = Number(prompt("ENTER MAXIMUM AGE"))
    AmountPerDay = Number(prompt("AMOUNT PER DAY"))
    Aroundlive = (MaximumAge - CurrentAge) * year * AmountPerDay
    alert(`You will need ${Aroundlive} vnđ to last you until the ripe old age of ${MaximumAge}`)
}
calculateSupply()
calculateSupply()
calculateSupply()
