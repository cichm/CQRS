import * as t from './types'
import { hasNewsletterPermissions } from "./permissions";

type HasNewsletterPermission = (gamer: t.Gamer, newsletter?: t.Newsletter) => boolean
type NewsletterPrivileges = Record<t.NewsletterPrivilege, HasNewsletterPermission>

const newsletterPrivileges: NewsletterPrivileges = {
    canPlayGame: (u, j) => hasNewsletterPermissions(u, j, 'canPlayGame'),
    canUpdateNewsletter: (u, j) => hasNewsletterPermissions(u, j, 'canUpdateNewsletter'),
    canUpdatePrivilege: (u, j) => hasNewsletterPermissions(u, j, 'canUpdatePrivilege'),
    canUpdateRankCalcParams: (u, j) => hasNewsletterPermissions(u, j, 'canUpdatePrivilege'),
    canUpdateStageRules: (u, j) => hasNewsletterPermissions(u, j, 'canUpdateStageRules'),
    canUpdateEditor: (u, j) => hasNewsletterPermissions(u, j, 'canUpdateEditor'),
    canDeleteNewsletter: (u, j) => hasNewsletterPermissions(u, j, 'canDeleteNewsletter')
};

export const privileges = {
    ...newsletterPrivileges
};