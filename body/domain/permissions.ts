import * as t from './types'
import calcRank from "./calcRank";
import beenionRankCalcParams from "./beenionRankCalcParams";

// permission chacks
export const hasNewsletterPermissions = (
    gamer: t.Gamer,
    newsletter: t.Newsletter,
    privilege: t.NewsletterPrivilege
) =>
    isListedGamer(newsletter.privileges[privilege], gamer) ||
    hasBeenionRank(newsletter.privileges[privilege], gamer) ||
    hasNewsletterRank(newsletter.privileges[privilege], gamer, newsletter) ||
    false;

// helper function
const isListedGamer = (perm: t.NewsletterPermission, gamer: t.Gamer) =>
    !!perm && Array.isArray(perm.gamers) && perm.gamers.includes(gamer.gamerId);

const hasBeenionRank = (perm: t.BeenionPermission, gamer: t.Gamer) => {
    return (
        !!perm && !!perm.beenionRank &&
            calcRank(gamer.rankEvents, beenionRankCalcParams) >= perm.beenionRank.min
    )
};

function hasNewsletterRank (
    perm: t.NewsletterPermission,
    gamer: t.Gamer,
    newsletter: t.Newsletter
) {
    const newsletterEvents = gamer.rankEvents.filter(
        event => event.newsletterId === undefined || event.newsletterId === newsletter.newsletterId
    );

    return (
        !!perm && !!perm.newsletterRank &&
            calcRank(newsletterEvents, newsletter.rankCalcParams) >= perm.newsletterRank.min
    )
}