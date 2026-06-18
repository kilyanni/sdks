/**
 * @generated SignedSource<<a651dc704a3f5aa58713741e76d01d85>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CountComparison = "EQUAL" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL" | "LESS_THAN" | "LESS_THAN_OR_EQUAL" | "%future added value";
export type PackageOrderBy = "ALPHABETICALLY" | "CREATED_DATE" | "PUBLISHED_DATE" | "SIZE" | "TOTAL_DOWNLOADS" | "TOTAL_LIKES" | "%future added value";
export type SearchOrderSort = "ASC" | "DESC" | "%future added value";
export type SearchPublishDate = "LAST_DAY" | "LAST_MONTH" | "LAST_WEEK" | "LAST_YEAR" | "%future added value";
export type WebcVersion = "V2" | "V3" | "%future added value";
export type PackagesFilter = {
  count?: number | null | undefined;
  createdAfter?: any | null | undefined;
  createdBefore?: any | null | undefined;
  curated?: boolean | null | undefined;
  deployable?: boolean | null | undefined;
  downloads?: CountFilter | null | undefined;
  hasBindings?: boolean | null | undefined;
  hasCommands?: boolean | null | undefined;
  isStandalone?: boolean | null | undefined;
  lastPublishedAfter?: any | null | undefined;
  lastPublishedBefore?: any | null | undefined;
  license?: string | null | undefined;
  likes?: CountFilter | null | undefined;
  orderBy?: PackageOrderBy | null | undefined;
  owner?: string | null | undefined;
  publishDate?: SearchPublishDate | null | undefined;
  publishedBy?: string | null | undefined;
  size?: CountFilter | null | undefined;
  sortBy?: SearchOrderSort | null | undefined;
  withInterfaces?: ReadonlyArray<string | null | undefined> | null | undefined;
};
export type CountFilter = {
  comparison?: CountComparison | null | undefined;
  count?: number | null | undefined;
};
export type srcSearchPackagesQuery$variables = {
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
  packages?: PackagesFilter | null | undefined;
  searchQuery: string;
};
export type srcSearchPackagesQuery$data = {
  readonly search: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly __typename: "PackageVersion";
        readonly createdAt: any;
        readonly id: string;
        readonly package: {
          readonly id: string;
          readonly lastVersion: {
            readonly createdAt: any;
            readonly distribution: {
              readonly downloadUrl: string;
              readonly piritaDownloadUrl: string | null | undefined;
              readonly piritaSha256Hash: string | null | undefined;
              readonly piritaSize: number | null | undefined;
              readonly size: number | null | undefined;
              readonly webcManifest: any | null | undefined;
              readonly webcVersion: WebcVersion | null | undefined;
            };
            readonly id: string;
            readonly version: string;
          } | null | undefined;
          readonly namespace: string;
          readonly packageName: string;
          readonly private: boolean;
        };
        readonly version: string;
      } | {
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        readonly __typename: "%other";
      };
    }>;
    readonly pageInfo: {
      readonly endCursor: string | null | undefined;
      readonly hasNextPage: boolean;
      readonly hasPreviousPage: boolean;
      readonly startCursor: string | null | undefined;
    };
    readonly totalCount: number;
  };
};
export type srcSearchPackagesQuery = {
  response: srcSearchPackagesQuery$data;
  variables: srcSearchPackagesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "before"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "last"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "packages"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "searchQuery"
},
v6 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "last"
  },
  {
    "kind": "Variable",
    "name": "packages",
    "variableName": "packages"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "searchQuery"
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "version",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v12 = {
  "kind": "InlineFragment",
  "selections": [
    (v9/*: any*/),
    (v10/*: any*/),
    (v11/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Package",
      "kind": "LinkedField",
      "name": "package",
      "plural": false,
      "selections": [
        (v9/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "packageName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "namespace",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "private",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PackageVersion",
          "kind": "LinkedField",
          "name": "lastVersion",
          "plural": false,
          "selections": [
            (v9/*: any*/),
            (v10/*: any*/),
            (v11/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "PackageDistribution",
              "kind": "LinkedField",
              "name": "distribution",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "piritaSha256Hash",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "piritaDownloadUrl",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "downloadUrl",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "size",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "piritaSize",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "webcVersion",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "webcManifest",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PackageVersion",
  "abstractKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasPreviousPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startCursor",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "srcSearchPackagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "SearchConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  (v12/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v13/*: any*/),
          (v14/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v5/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "srcSearchPackagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "SearchConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  (v12/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v9/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v13/*: any*/),
          (v14/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3bbe88f1cf3f5d33e49ad8163b2c72b1",
    "id": null,
    "metadata": {},
    "name": "srcSearchPackagesQuery",
    "operationKind": "query",
    "text": "query srcSearchPackagesQuery(\n  $searchQuery: String!\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n  $packages: PackagesFilter\n) {\n  search(query: $searchQuery, packages: $packages, first: $first, after: $after, last: $last, before: $before) {\n    edges {\n      cursor\n      node {\n        __typename\n        ... on PackageVersion {\n          id\n          version\n          createdAt\n          package {\n            id\n            packageName\n            namespace\n            private\n            lastVersion {\n              id\n              version\n              createdAt\n              distribution {\n                piritaSha256Hash\n                piritaDownloadUrl\n                downloadUrl\n                size\n                piritaSize\n                webcVersion\n                webcManifest\n              }\n            }\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      endCursor\n      startCursor\n    }\n    totalCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "03382a9cf1efccf9379cc545c1928618";

export default node;
