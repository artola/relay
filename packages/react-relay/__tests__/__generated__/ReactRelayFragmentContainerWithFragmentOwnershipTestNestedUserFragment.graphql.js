/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<ae1386163f7966a38fa65af6996b4024>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment$fragmentType: FragmentType;
export type ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment$ref = ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment$fragmentType;
export type ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment$data = {|
  +username: ?string,
  +$fragmentType: ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment$fragmentType,
|};
export type ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment = ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment$data;
export type ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment$key = {
  +$data?: ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment$data,
  +$fragmentSpreads: ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "696fd5eeae83e4817dbea8b08ef65786";
}

module.exports = ((node/*: any*/)/*: Fragment<
  ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment$fragmentType,
  ReactRelayFragmentContainerWithFragmentOwnershipTestNestedUserFragment$data,
>*/);
