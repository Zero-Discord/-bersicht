module.exports = {
name: "create-ticket",
code: `
$description[Your ticket has been created!] $color[00ff00] $footer[If there are any problems with creating a ticket, contact my developers!]
$newTicket[ticket-$username;|| <@$authorID> ||
{description:<@$authorID> - $getServerVar[ticketsmessage]
__Subject__
\`\`\`$getUserVar[subject]\`\`\`} {title:$username's ticket} {footer: Use \`$getServerVar[prefix]close-ticket\` to close the ticket} {color:00ff00};$getServerVar[ticketscategory];no;:x: Fatal error! Try setting the Ticketcategory and cooldown again. If thats not working contact some bot staff on the Support Server!]
$setUserVar[subjects;$message]
$cooldown[$getServerVar[ticketscooldown];Sorry, you can't create another ticket at the moment. You have to wait %time% until you can use this command again!]
$onlyIf[$getServerVar[ticketscategory]!=unset;No Ticketcategory has been set yet. Please contact some server staff to change this by using \`$getServerVar[prefix]set-ticketcategory (CategoryID)\`.] 

`
}
