enum Membership {
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];
console.log(membership); //1
console.log(membershipReverse); //Premium

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "Facebook",
  INSTAGRAM = "Instagram",
}

const social = SocialMedia.INSTAGRAM;
console.log(social); //Instagram
