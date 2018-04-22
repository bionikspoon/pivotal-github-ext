/* @flow */
/* eslint-disable jsx-a11y/label-has-for */
import * as React from 'react'
import { AppContainer } from '../App'

type Props = { children: React.Node }

function GithubOuterWrapper(props: Props) {
  return (
    <div role="main" className="application-main ">
      <div id="js-repo-pjax-container">
        <div className="container new-discussion-timeline experiment-repo-nav  ">
          <div className="repository-content ">
            <div className="issues-listing">
              <div className="clearfix js-issues-results">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GithubConversation() {
  return (
    <React.Fragment>
      <h2 className="sr-only">Conversation</h2>
      <div
        id="discussion_bucket"
        className="clearfix pull-request-tab-content is-visible"
      >
        <div className="discussion-sidebar">
          <div
            id="partial-discussion-sidebar"
            className="js-socket-channel js-updatable-content"
          >
            <div className="discussion-sidebar-item sidebar-assignee js-discussion-sidebar-item position-relative">
              <form
                className="js-issue-sidebar-form"
                action="/bionikspoon/test_repo/pull/11/review-requests?pr_global_id=MDExOlB1bGxSZXF1ZXN0MTQ1NTEzMDQw"
                acceptCharset="UTF-8"
                method="post"
              >
                <div className="discussion-sidebar-heading text-bold">
                  Reviewers
                </div>

                <span className="css-truncate">No reviews</span>
              </form>
            </div>

            <div className="discussion-sidebar-item sidebar-assignee js-discussion-sidebar-item">
              <form
                className="js-issue-sidebar-form"
                action="/bionikspoon/test_repo/issues/11?partial=issues%2Fsidebar%2Fshow%2Fassignees"
                acceptCharset="UTF-8"
                method="post"
              >
                <div className="discussion-sidebar-heading text-bold">
                  Assignees
                </div>

                <span className="css-truncate">
                  <p>
                    <span className="js-hovercard-left">
                      <a
                        className="no-underline"
                        href="/bionikspoon"
                        aria-describedby="hovercard-aria-description"
                      >
                        <img
                          className="avatar"
                          src="https://avatars3.githubusercontent.com/u/5052422?s=40&amp;v=4"
                          width="20"
                          height="20"
                          alt="@bionikspoon"
                        />
                      </a>
                      <a
                        className="assignee link-gray-dark"
                        href="/bionikspoon"
                        aria-describedby="hovercard-aria-description"
                      >
                        <span className="css-truncate-target">bionikspoon</span>
                      </a>
                    </span>
                  </p>
                </span>
              </form>
            </div>

            <div className="discussion-sidebar-item sidebar-labels js-discussion-sidebar-item">
              <form
                className="js-issue-sidebar-form"
                action="/bionikspoon/test_repo/issues/11?partial=issues%2Fsidebar%2Fshow%2Flabels"
                acceptCharset="UTF-8"
                method="post"
              >
                <div className="js-issue-labels-container">
                  <div className="discussion-sidebar-heading text-bold">
                    Labels
                  </div>
                </div>
                <div aria-live="polite" aria-label="Labels">
                  <div className="labels css-truncate">
                    <a
                      className="sidebar-labels-style box-shadow-none width-full d-block IssueLabel v-align-text-top labelstyle-a71f39 linked-labelstyle-a71f39"
                      style={{
                        backgroundColor: '#a71f39',
                        color: '#ffffff',
                      }}
                      title="rejected"
                      href="/bionikspoon/test_repo/labels/rejected"
                    >
                      <span
                        className="css-truncate-target"
                        style={{ maxWidth: '100%' }}
                      >
                        rejected
                      </span>
                    </a>
                    <a
                      className="sidebar-labels-style box-shadow-none width-full d-block IssueLabel v-align-text-top labelstyle-c8cbd0 linked-labelstyle-c8cbd0"
                      style={{
                        backgroundColor: '#c8cbd0',
                        color: '#000000',
                      }}
                      title="started"
                      href="/bionikspoon/test_repo/labels/started"
                    >
                      <span
                        className="css-truncate-target"
                        style={{ maxWidth: '100%' }}
                      >
                        started
                      </span>
                    </a>
                  </div>
                </div>
              </form>
            </div>

            <div className="discussion-sidebar-item js-discussion-sidebar-item">
              <form
                className="js-issue-sidebar-form"
                action="/bionikspoon/test_repo/projects/issues/11"
                acceptCharset="UTF-8"
                method="post"
              >
                <div className="discussion-sidebar-heading text-bold">
                  Projects
                </div>

                <span className="css-truncate sidebar-projects">None yet</span>
              </form>
            </div>

            <div className="discussion-sidebar-item sidebar-milestone js-discussion-sidebar-item">
              <form
                className="js-issue-sidebar-form"
                action="/bionikspoon/test_repo/issues/11/set_milestone?partial=issues%2Fsidebar%2Fshow%2Fmilestone"
                acceptCharset="UTF-8"
                method="post"
              >
                <div className="discussion-sidebar-heading text-bold">
                  Milestone
                </div>
                No milestone
              </form>
            </div>

            <div
              id="partial-users-participants"
              className="discussion-sidebar-item"
            >
              <div className="participation">
                <div className="discussion-sidebar-heading text-bold">
                  1 participant
                </div>
                <div className="participation-avatars d-flex flex-wrap">
                  <a className="participant-avatar" href="/bionikspoon">
                    <img
                      className="avatar"
                      src="https://avatars2.githubusercontent.com/u/5052422?s=52&amp;v=4"
                      width="26"
                      height="26"
                      alt="@bionikspoon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="discussion-timeline pull-discussion-timeline js-pull-discussion-timeline js-quote-selection-container js-review-state-classes  ">
          <div className="js-discussion js-socket-channel">
            <div className="timeline-comment-wrapper js-comment-container mt-0">
              <div className="avatar-parent-child timeline-comment-avatar">
                <a
                  className="d-inline-block"
                  href="/bionikspoon"
                  aria-describedby="hovercard-aria-description"
                >
                  <img
                    className="avatar rounded-1"
                    height="44"
                    width="44"
                    alt="@bionikspoon"
                    src="https://avatars1.githubusercontent.com/u/5052422?s=88&amp;v=4"
                  />
                </a>
              </div>

              <div className="js-minimizable-comment-group">
                <div
                  id="issue-145513040"
                  className="unminimized-comment comment previewable-edit js-comment js-task-list-container timeline-comment  "
                >
                  <div className="timeline-comment-header clearfix">
                    <div className="timeline-comment-actions" />

                    <span
                      className="timeline-comment-label text-bold tooltipped tooltipped-multiline tooltipped-s"
                      aria-label="This user is the owner of the test_repo repository."
                    >
                      Owner
                    </span>

                    <h3 className="timeline-comment-header-text f5 text-normal">
                      <strong>
                        <a
                          className="author text-inherit"
                          href="/bionikspoon"
                          aria-describedby="hovercard-aria-description"
                        >
                          bionikspoon
                        </a>
                      </strong>
                      commented
                      <a href="#issue-145513040" className="timestamp">
                        <relative-time
                          datetime="2017-10-09T17:58:27Z"
                          title="Oct 9, 2017, 12:58 PM CDT"
                        >
                          on Oct 9, 2017
                        </relative-time>
                      </a>
                    </h3>
                  </div>

                  <div className="edit-comment-hide">
                    <table className="d-block">
                      <tbody className="d-block">
                        <tr className="d-block">
                          <td className="d-block comment-body markdown-body  js-comment-body">
                            <p className="text-gray">
                              <em>No description provided.</em>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="comment-reactions  js-reactions-container " />
                  </div>
                </div>
              </div>
            </div>

            <div className="js-timeline-item js-timeline-progressive-focus-container">
              <div
                className="discussion-item discussion-commits"
                id="commits-pushed-5c2bb80"
              >
                <div className="discussion-item-body">
                  <div className="timeline-commits ">
                    <div className="commit js-details-container Details js-socket-channel js-updatable-content no-wrap d-flex mb-2">
                      <div className="commit-icon mr-3">
                        <svg
                          className="octicon octicon-git-commit"
                          viewBox="0 0 14 16"
                          version="1.1"
                          width="14"
                          height="16"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"
                          />
                        </svg>
                      </div>

                      <div className="AvatarStack flex-self-start ">
                        <div
                          className="AvatarStack-body"
                          aria-label="bionikspoon"
                        >
                          <a
                            className="avatar"
                            href="/bionikspoon"
                            aria-describedby="hovercard-aria-description"
                          >
                            <img
                              height="20"
                              width="20"
                              alt="@bionikspoon"
                              src="https://avatars0.githubusercontent.com/u/5052422?s=60&amp;v=4"
                            />
                          </a>
                        </div>
                      </div>

                      <div className="commit-message pr-1">
                        <code>
                          <a
                            title="Makin' Changes [#151356728, #151371609, #151371639]"
                            className="message"
                            href="/bionikspoon/test_repo/pull/11/commits/5c2bb80087d5695294afb0c4ad3a40074ba085ca"
                          >
                            {
                              "Makin' Changes [#151356728, #151371609, #151371639]"
                            }
                          </a>
                        </code>
                      </div>

                      <div className="commit-sig-status text-right pr-1">
                        <div className="d-inline-block dropdown dropdown-signed-commit js-menu-container">
                          <button
                            type="button"
                            className="signed-commit-badge signed-commit-badge-small js-menu-target"
                            aria-label="View commit signature"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Unverified
                          </button>
                          <div className="dropdown-menu-content anim-scale-in js-menu-content">
                            <div className="dropdown-menu dropdown-menu-w py-0 text-gray-dark text-left">
                              <div className="signed-commit-header TableObject">
                                <div className="TableObject-item">
                                  <svg
                                    height="32"
                                    className="octicon octicon-unverified mr-2"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="32"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M15.67 7.06l-1.08-1.34c-.17-.22-.28-.48-.31-.77l-.19-1.7a1.51 1.51 0 0 0-1.33-1.33l-1.7-.19c-.3-.03-.56-.16-.78-.33L8.94.32c-.55-.44-1.33-.44-1.88 0L5.72 1.4c-.22.17-.48.28-.77.31l-1.7.19c-.7.08-1.25.63-1.33 1.33l-.19 1.7c-.03.3-.16.56-.33.78L.32 7.05c-.44.55-.44 1.33 0 1.88l1.08 1.34c.17.22.28.48.31.77l.19 1.7c.08.7.63 1.25 1.33 1.33l1.7.19c.3.03.56.16.78.33l1.34 1.08c.55.44 1.33.44 1.88 0l1.34-1.08c.22-.17.48-.28.77-.31l1.7-.19c.7-.08 1.25-.63 1.33-1.33l.19-1.7c.03-.3.16-.56.33-.78l1.08-1.34c.44-.55.44-1.33 0-1.88zM9 11.5c0 .28-.22.5-.5.5h-1c-.27 0-.5-.22-.5-.5v-1c0-.28.23-.5.5-.5h1c.28 0 .5.22.5.5v1zm1.56-4.89c-.06.17-.17.33-.3.47-.13.16-.14.19-.33.38-.16.17-.31.3-.52.45-.11.09-.2.19-.28.27-.08.08-.14.17-.19.27-.05.1-.08.19-.11.3-.03.11-.03.13-.03.25H7.13c0-.22 0-.31.03-.48.03-.19.08-.36.14-.52.06-.14.14-.28.25-.42.11-.13.23-.25.41-.38.27-.19.36-.3.48-.52.12-.22.2-.38.2-.59 0-.27-.06-.45-.2-.58-.13-.13-.31-.19-.58-.19-.09 0-.19.02-.3.05-.11.03-.17.09-.25.16-.08.07-.14.11-.2.2a.41.41 0 0 0-.09.28h-2c0-.38.13-.56.27-.83.16-.27.36-.5.61-.67.25-.17.55-.3.88-.38.33-.08.7-.13 1.09-.13.44 0 .83.05 1.17.13.34.09.63.22.88.39.23.17.41.38.55.63.13.25.19.55.19.88 0 .22 0 .42-.08.59l-.02-.01z"
                                    />
                                  </svg>
                                </div>
                                <div className="TableObject-item--primary">
                                  The key that signed this is expired.
                                </div>
                              </div>
                              <div className="signed-commit-footer">
                                <span className="d-block">
                                  GPG key ID:
                                  <span className="text-gray">
                                    579465F37D86E74B
                                  </span>
                                </span>
                                <a href="https://help.github.com/articles/signing-commits-using-gpg/">
                                  Learn about signing commits
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="commit-ci-status pr-1" />

                      <div className="commit-meta text-right">
                        <code>
                          <a
                            href="/bionikspoon/test_repo/pull/11/commits/5c2bb80087d5695294afb0c4ad3a40074ba085ca"
                            className="commit-id"
                          >
                            5c2bb80
                          </a>
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="js-timeline-item js-timeline-progressive-focus-container">
              <div className="discussion-item discussion-item-assigned">
                <h3
                  className="discussion-item-header f5 text-normal"
                  id="event-1284627807"
                >
                  <span className="discussion-item-icon">
                    <svg
                      className="octicon octicon-person"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"
                      />
                    </svg>
                  </span>
                  <a
                    className="d-inline-block"
                    href="/bionikspoon"
                    aria-describedby="hovercard-aria-description"
                  >
                    <img
                      className="avatar"
                      height="16"
                      width="16"
                      alt="@bionikspoon"
                      src="https://avatars0.githubusercontent.com/u/5052422?s=60&amp;v=4"
                    />
                  </a>
                  <a
                    className="author text-inherit"
                    href="/bionikspoon"
                    aria-describedby="hovercard-aria-description"
                  >
                    bionikspoon
                  </a>
                  self-assigned this
                  <a href="#event-1284627807" className="timestamp">
                    <relative-time
                      datetime="2017-10-09T18:08:04Z"
                      title="Oct 9, 2017, 1:08 PM CDT"
                    >
                      on Oct 9, 2017
                    </relative-time>
                  </a>
                </h3>
              </div>

              <div className="discussion-item discussion-item-labeled">
                <h3
                  className="discussion-item-header f5 text-normal"
                  id="event-1284627849"
                >
                  <span className="discussion-item-icon">
                    <svg
                      className="octicon octicon-tag"
                      viewBox="0 0 14 16"
                      version="1.1"
                      width="14"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"
                      />
                    </svg>
                  </span>
                  <a
                    className="d-inline-block"
                    href="/bionikspoon"
                    aria-describedby="hovercard-aria-description"
                  >
                    <img
                      className="avatar"
                      height="16"
                      width="16"
                      alt="@bionikspoon"
                      src="https://avatars0.githubusercontent.com/u/5052422?s=60&amp;v=4"
                    />
                  </a>
                  <a
                    className="author text-inherit"
                    href="/bionikspoon"
                    aria-describedby="hovercard-aria-description"
                  >
                    bionikspoon
                  </a>
                  added
                  <span
                    className="IssueLabel d-inline-block v-align-middle "
                    title="started"
                    style={{ backgroundColor: '#c8cbd0' }}
                  >
                    <a
                      className="lh-condensed-ultra"
                      href="/bionikspoon/test_repo/labels/started"
                      style={{ color: '#000000' }}
                    >
                      started
                    </a>
                  </span>
                  <span
                    className="IssueLabel d-inline-block v-align-middle "
                    title="finished"
                    style={{ backgroundColor: '#203e64' }}
                  >
                    <a
                      className="lh-condensed-ultra"
                      href="/bionikspoon/test_repo/labels/finished"
                      style={{ color: '#ffffff' }}
                    >
                      finished
                    </a>
                  </span>
                  <span
                    className="IssueLabel d-inline-block v-align-middle "
                    title="rejected"
                    style={{ backgroundColor: '#a71f39' }}
                  >
                    <a
                      className="lh-condensed-ultra"
                      href="/bionikspoon/test_repo/labels/rejected"
                      style={{ color: '#ffffff' }}
                    >
                      rejected
                    </a>
                  </span>
                  <span
                    className="IssueLabel d-inline-block v-align-middle "
                    title="delivered"
                    style={{ backgroundColor: '#d93f0b' }}
                  >
                    <a
                      className="lh-condensed-ultra"
                      href="/bionikspoon/test_repo/labels/delivered"
                      style={{ color: '#ffffff' }}
                    >
                      delivered
                    </a>
                  </span>
                  <span
                    className="IssueLabel d-inline-block v-align-middle "
                    title="accepted"
                    style={{ backgroundColor: '#4e8200' }}
                  >
                    <a
                      className="lh-condensed-ultra"
                      href="/bionikspoon/test_repo/labels/accepted"
                      style={{ color: '#ffffff' }}
                    >
                      accepted
                    </a>
                  </span>
                  and removed
                  <span
                    className="IssueLabel d-inline-block v-align-middle "
                    title="started"
                    style={{ backgroundColor: '#c8cbd0' }}
                  >
                    <a
                      className="lh-condensed-ultra"
                      href="/bionikspoon/test_repo/labels/started"
                      style={{ color: '#000000' }}
                    >
                      started
                    </a>
                  </span>
                  <span
                    className="IssueLabel d-inline-block v-align-middle "
                    title="finished"
                    style={{ backgroundColor: '#203e64' }}
                  >
                    <a
                      className="lh-condensed-ultra"
                      href="/bionikspoon/test_repo/labels/finished"
                      style={{ color: '#ffffff' }}
                    >
                      finished
                    </a>
                  </span>
                  <span
                    className="IssueLabel d-inline-block v-align-middle "
                    title="rejected"
                    style={{ backgroundColor: '#a71f39' }}
                  >
                    <a
                      className="lh-condensed-ultra"
                      href="/bionikspoon/test_repo/labels/rejected"
                      style={{ color: '#ffffff' }}
                    >
                      rejected
                    </a>
                  </span>
                  <span
                    className="IssueLabel d-inline-block v-align-middle "
                    title="delivered"
                    style={{ backgroundColor: '#d93f0b' }}
                  >
                    <a
                      className="lh-condensed-ultra"
                      href="/bionikspoon/test_repo/labels/delivered"
                      style={{ color: '#ffffff' }}
                    >
                      delivered
                    </a>
                  </span>
                  labels
                  <a href="#event-1284627849" className="timestamp">
                    <relative-time
                      datetime="2017-10-09T18:08:06Z"
                      title="Oct 9, 2017, 1:08 PM CDT"
                    >
                      on Oct 9, 2017
                    </relative-time>
                  </a>
                </h3>
              </div>
            </div>

            <div
              id="partial-timeline"
              className="js-timeline-marker js-socket-channel js-updatable-content"
            >
              <form
                className="d-none js-timeline-marker-form"
                action="/_graphql/MarkNotificationThreadAsRead"
                acceptCharset="UTF-8"
                method="post"
              />
            </div>
          </div>

          <div className="discussion-timeline-actions">
            <div className="flash flash-warn mt-3">
              <a
                rel="nofollow"
                className="btn btn-primary"
                href="/join?source=comment-repo"
              >
                Sign up for free
              </a>
              <strong>to join this conversation on GitHub</strong>. Already have
              an account?
              <a
                rel="nofollow"
                href="/login?return_to=https%3A%2F%2Fgithub.com%2Fbionikspoon%2Ftest_repo%2Fpull%2F11%3F_pjax%3D%2523js-repo-pjax-container"
              >
                Sign in to comment
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default function GithubWrapper(props: Props) {
  return (
    <GithubOuterWrapper>
      <div
        id="partial-discussion-header"
        className="gh-header js-details-container Details js-socket-channel js-updatable-content pull request"
      >
        <div className="gh-header-show ">
          <div className="gh-header-actions">
            <button
              type="button"
              className="btn btn-sm btn-primary float-right"
              aria-haspopup="true"
            >
              New issue
            </button>
            <div id="new_issue_modal" style={{ display: 'none' }}>
              <div className="mt-3 mb-2 text-center">
                <svg
                  height="60"
                  className="octicon octicon-comment-discussion text-blue"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="60"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z"
                  />
                </svg>
              </div>

              <div className="px-4">
                <p className="text-center mb-4">
                  <strong>Have a question about this project?</strong> Sign up
                  for a free GitHub account to open an issue and contact its
                  maintainers and the community.
                </p>

                <form
                  className="js-signup-form"
                  autoComplete="off"
                  action="/join?return_to=%2Fbionikspoon%2Ftest_repo%2Fissues%2Fnew"
                  acceptCharset="UTF-8"
                  method="post"
                >
                  <auto-check src="/signup_check/username">
                    <dl className="form-group">
                      <dt className="input-label">
                        <label
                          name="user[login]"
                          autoCapitalize="off"
                          htmlFor="user_login_issues"
                        >
                          Pick a username
                        </label>
                      </dt>
                      <dd>
                        <input
                          name="user[login]"
                          autoCapitalize="off"
                          className="form-control"
                          type="text"
                          id="user_login_issues"
                        />
                      </dd>
                    </dl>
                  </auto-check>
                  <auto-check src="/signup_check/email">
                    <dl className="form-group">
                      <dt className="input-label">
                        <label
                          name="user[email]"
                          autoCapitalize="off"
                          htmlFor="user_email_issues"
                        >
                          Email Address
                        </label>
                      </dt>
                      <dd>
                        <input
                          name="user[email]"
                          autoCapitalize="off"
                          className="form-control"
                          type="text"
                          id="user_email_issues"
                        />
                      </dd>
                    </dl>
                  </auto-check>
                  <auto-check src="/signup_check/password">
                    <dl className="form-group">
                      <dt className="input-label">
                        <label
                          name="user[password]"
                          htmlFor="user_password_issues"
                        >
                          Password
                        </label>
                      </dt>
                      <dd>
                        <input
                          name="user[password]"
                          className="form-control"
                          type="password"
                          id="user_password_issues"
                        />
                      </dd>
                    </dl>
                  </auto-check>

                  <input
                    type="text"
                    name="required_field_9f62"
                    id="required_field_9f62"
                    style={{ display: 'none' }}
                    className="form-control"
                  />

                  <button
                    className="btn btn-primary mt-2 btn-block"
                    type="submit"
                  >
                    Sign up for GitHub
                  </button>
                </form>
                <p className="mt-4 text-gray text-center">
                  By clicking “Sign up for GitHub”, you agree to our
                  <a
                    href="https://help.github.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    terms of service
                  </a>
                  and
                  <a
                    href="https://help.github.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    privacy statement
                  </a>. We’ll occasionally send you account related emails.
                </p>
                <p className="mt-4 text-gray text-center">
                  Already on GitHub?
                  <a href="/login?return_to=%2Fbionikspoon%2Ftest_repo%2Fissues%2Fnew">
                    Sign in
                  </a>
                  to your account
                </p>
              </div>
            </div>
          </div>

          <h1 className="gh-header-title">
            <span className="js-issue-title">
              {"Makin' Changes [#151356728, #151371609, #151371639]"}
            </span>
            <span className="gh-header-number">#11</span>
          </h1>
        </div>

        <div className="TableObject gh-header-meta">
          <div className="TableObject-item">
            <div className="State State--green">
              <svg
                className="octicon octicon-git-pull-request"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                />
              </svg>
              Open
            </div>
          </div>
          <div className="TableObject-item TableObject-item--primary">
            <a
              className="author pull-header-username css-truncate css-truncate-target expandable"
              href="/bionikspoon"
              aria-describedby="hovercard-aria-description"
            >
              bionikspoon
            </a>
            wants to merge 1 commit into
            <span
              title="bionikspoon/test_repo:master"
              className="commit-ref css-truncate user-select-contain expandable base-ref"
            >
              <span className="css-truncate-target">master</span>
            </span>
            <div className="commit-ref-dropdown">
              <div className="select-menu js-menu-container js-select-menu commitish-suggester js-load-contents">
                <button
                  className="btn btn-sm select-menu-button js-menu-target branch"
                  type="button"
                  aria-label="Choose a base branch"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i>base:</i>
                  <span
                    className="js-select-button css-truncate css-truncate-target"
                    title="base: master"
                  >
                    master
                  </span>
                </button>
                <div className="select-menu-modal-holder js-menu-content js-navigation-container">
                  <div className="select-menu-modal">
                    <div className="js-select-menu-deferred-content" />
                    <div className="select-menu-loading-overlay anim-pulse">
                      <svg
                        height="32"
                        className="octicon octicon-octoface"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="32"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            from
            <span
              title="bionikspoon/test_repo:mp_multi_story"
              className="commit-ref css-truncate user-select-contain expandable head-ref"
            >
              <span className="css-truncate-target">mp_multi_story</span>
            </span>
          </div>
        </div>
      </div>
      <div id="PivotalGithubChromeExtension">
        <AppContainer>{props.children}</AppContainer>
      </div>
      <div className="tabnav tabnav-pr">
        <div className="tabnav-extra float-right">
          <span className="diffstat" id="diffstat">
            <span className="text-green">+3</span>
            <span className="text-red">−1</span>
            <span
              className="tooltipped tooltipped-s"
              aria-label="4 lines changed"
            >
              <span className="block-diff-added" />
              <span className="block-diff-added" />
              <span className="block-diff-added" />
              <span className="block-diff-deleted" />
              <span className="block-diff-neutral" />
            </span>
          </span>
        </div>

        <nav className="tabnav-tabs">
          <a
            href="/bionikspoon/test_repo/pull/11"
            className="tabnav-tab selected js-pjax-history-navigate"
          >
            <svg
              className="octicon octicon-comment-discussion"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z"
              />
            </svg>
            Conversation
            <span id="conversation_tab_counter" className="Counter">
              0
            </span>
          </a>

          <a
            href="/bionikspoon/test_repo/pull/11/commits"
            className="tabnav-tab  js-pjax-history-navigate"
          >
            <svg
              className="octicon octicon-git-commit"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"
              />
            </svg>
            Commits
            <span id="commits_tab_counter" className="Counter">
              1
            </span>
          </a>

          <link
            rel="pjax-prefetch"
            href="/bionikspoon/test_repo/pull/11/files"
          />
          <a
            href="/bionikspoon/test_repo/pull/11/files"
            className="tabnav-tab  js-pjax-history-navigate"
          >
            <svg
              className="octicon octicon-diff"
              viewBox="0 0 13 16"
              version="1.1"
              width="13"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6 7h2v1H6v2H5V8H3V7h2V5h1v2zm-3 6h5v-1H3v1zM7.5 2L11 5.5V15c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6.5zM10 6L7 3H1v12h9V6zM8.5 0H3v1h5l4 4v8h1V4.5L8.5 0z"
              />
            </svg>
            Files changed
            <span id="files_tab_counter" className="Counter">
              1
            </span>
          </a>
        </nav>
      </div>
      <GithubConversation {...props} />
    </GithubOuterWrapper>
  )
}
