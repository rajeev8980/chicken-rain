let number = 44
if (number % 4 == 0) {
    if (number % 5 == 0) {
        player.say("the number is divisible by both 4 and 5")
    } else {
        player.say("the number is divisile by 4 only")
    }
} else if (number % 5 == 0) {
    if (number % 4 == 0) {
        player.say("The number is divisile by both 5 and 4")
    } else {
        player.say("The number is divisible by 5 only")
    }
} else {
    player.say("the number is neither divisible by both and")
}
