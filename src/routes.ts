import {Router} from 'lib/routes/router'

export const router = new Router({
  Home: '/',
  Search: '/search',
  Notifications: '/notifications',
  Settings: '/settings',
  Moderation: '/moderation',
  ModerationMuteLists: '/moderation/mute-lists',
  ModerationMutedAccounts: '/moderation/muted-accounts',
  ModerationBlockedAccounts: '/moderation/blocked-accounts',
  Profile: '/profile/:name',
  ProfileFollowers: '/profile/:name/followers',
  ProfileFollows: '/profile/:name/follows',
  ProfileList: '/profile/:name/lists/:rkey',
  PostThread: '/profile/:name/post/:rkey',
  PostLikedBy: '/profile/:name/post/:rkey/liked-by',
  PostRepostedBy: '/profile/:name/post/:rkey/reposted-by',
  Debug: '/sys/debug',
  Log: '/sys/log',
  AppPasswords: '/settings/app-passwords',
  Support: '/support',
  PrivacyPolicy: '/support/privacy',
  TermsOfService: '/support/tos',
  CommunityGuidelines: '/support/community-guidelines',
  CopyrightPolicy: '/support/copyright',
})
