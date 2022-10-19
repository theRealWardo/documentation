/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: "doc",
      label: "Docs home",
      id: "home/index",
    },
    {
      type: "category",
      label: "Introduction",
      link: { type: "doc", id: "introduction/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Introduction to Events and Streaming",
          id: "introduction/intro-to-events",
        },
        {
          type: "doc",
          label: "Designed for Performance",
          id: "introduction/autotune",
        },
        "introduction/licenses",
        {
          type: "doc",
          label: "Technical Preview",
          id: "introduction/tech-preview",
        },
      ],
    },
    {
      type: "category",
      label: "Install and Upgrade",
      link: { type: "doc", id: "install-upgrade/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Installing Preview Versions",
          id: "install-upgrade/install-preview",
        },
        {
          type: "doc",
          label: "Version Upgrade",
          id: "install-upgrade/version-upgrade",
        },
        {
          type: "doc",
          label: "Rolling Upgrades",
          id: "install-upgrade/rolling-upgrade",
        },
      ],
    },
    {
      type: "category",
      label: "60-Second Guides",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "quickstart/index" },
      items: [
        {
          type: "doc",
          label: "Docker",
          id: "quickstart/quick-start-docker",
        },
        {
          type: "doc",
          label: "Linux",
          id: "quickstart/quick-start-linux",
        },
        {
          type: "doc",
          label: "macOS",
          id: "quickstart/quick-start-macos",
        },
        {
          type: "doc",
          label: "Windows",
          id: "quickstart/quick-start-windows",
        },
        {
          type: "doc",
          label: "Kubernetes",
          id: "quickstart/kubernetes-qs-dev",
        },
      ],
    },
    {
      type: "category",
      label: "Deployment",
      collapsible: true,
      link: { type: "doc", id: "deployment/index" },
      collapsed: true,
      items: [
        "deployment/production-deployment-automation",
        {
          type: "category",
          label: "Performance and storage tuning",
          items: ["deployment/disk-utilization", "deployment/io-optimization"],
        },
        {
          type: "doc",
          label: "Deploying for Production",
          id: "deployment/production-deployment",
        },
        {
          type: "doc",
          label: "Writing Custom Deployment",
          id: "deployment/custom-deployment",
        },
      ],
    },
    {
      type: "category",
      label: "Cluster Administration",
      link: { type: "doc", id: "cluster-administration/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Configuration",
          link: { type: "doc", id: "cluster-administration/configuration" },
          items: [
            {
              type: "doc",
              label: "Configuring Cluster Properties",
              id: "cluster-administration/cluster-property-configuration",
            },
            {
              type: "doc",
              label: "Configuring Node Properties",
              id: "cluster-administration/node-property-configuration",
            },
            "cluster-administration/listener-configuration",
          ],
        },
        {
          type: "category",
          label: "Cluster balancing",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "cluster-administration/cluster-balancing" },
          items: [
            {
              type: "doc",
              label: "Configuring Continuous Data Balancing",
              id: "cluster-administration/continuous-data-balancing",
            },
          ],
        },
        {
          type: "doc",
          label: "Node Maintenance Mode",
          id: "cluster-administration/node-management",
        },
        "cluster-administration/monitoring",
      ],
    },
    {
      type: "category",
      label: "Data Management",
      link: { type: "doc", id: "data-management/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "data-management/tiered-storage",
        "data-management/data-archiving",
        "data-management/remote-read-replicas",
        "data-management/data-transform",
        "data-management/data-migration",
        "data-management/rack-awareness",
      ],
    },
    {
      type: "category",
      label: "Development",
      link: { type: "doc", id: "development/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Kafka clients",
          id: "development/kafka-clients",
        },
        "development/guide-nodejs",
        "development/consumer-offsets",
        "development/idempotent-producers",
        "development/http-proxy",
      ],
    },
    {
      type: "category",
      label: "Security",
      link: { type: "doc", id: "security/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "security/encryption",
        "security/authentication",
        "security/authorization",
        "security/iam-roles",
        {
          type: "category",
          label: "Security on Kubernetes",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Configuring TLS on Kubernetes",
              id: "security/kubernetes-tls",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Redpanda Console",
      link: { type: "doc", id: "console/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "console/installation",
        {
          type: "category",
          label: "Features",
          items: [
            "console/features/kafka-connect",
            "console/features/record-deserialization",
            "console/features/schema-registry",
            "console/features/protobuf",
            "console/features/topic-documentation",
            "console/features/programmable-push-filters",
            "console/features/http-path-rewrites",
          ],
        },
        {
          type: "category",
          label: "Single Sign On",
          items: [
            {
              type: "doc",
              label: "Authentication",
              id: "console/single-sign-on/authentication",
            },
            {
              type: "doc",
              label: "Authorization",
              id: "console/single-sign-on/authorization",
            },
            {
              type: "doc",
              label: "GitHub",
              id: "console/single-sign-on/identity-providers/github",
            },
            {
              type: "doc",
              label: "Google",
              id: "console/single-sign-on/identity-providers/google",
            },
            {
              type: "doc",
              label: "Okta",
              id: "console/single-sign-on/identity-providers/okta",
            },
            {
              type: "doc",
              label: "Generic OIDC",
              id: "console/single-sign-on/identity-providers/generic-oidc",
            },
          ],
        },
        {
          type: "category",
          label: "Reference",
          items: [
            {
              type: "doc",
              label: "Redpanda Console Configuration",
              id: "console/reference/config",
            },
            {
              type: "doc",
              label: "Redpanda Console Role-Binding Configuration",
              id: "console/reference/role-bindings",
            },
            {
              type: "doc",
              label: "Docker Compose Configuration",
              id: "console/reference/docker-compose",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Reference",
      link: { type: "doc", id: "reference/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "reference/cluster-properties",
        "reference/tunable-properties",
        "reference/node-properties",
        "reference/node-configuration-sample",
        {
          type: "category",
          label: "rpk Commands",
          link: { type: "doc", id: "reference/rpk/index" },
          items: [
            "reference/rpk/rpk-commands",
            {
              type: "category",
              label: "rpk acl",
              link: { type: "doc", id: "reference/rpk/rpk-acl/rpk-acl" },
              items: [
                "reference/rpk/rpk-acl/rpk-acl",
                "reference/rpk/rpk-acl/rpk-acl-create",
                "reference/rpk/rpk-acl/rpk-acl-delete",
                {
                  type: "category",
                  label: "rpk acl user",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-acl/rpk-acl-user",
                  },
                  items: [
                    "reference/rpk/rpk-acl/rpk-acl-user",
                    "reference/rpk/rpk-acl/rpk-acl-user-create",
                    "reference/rpk/rpk-acl/rpk-acl-user-delete",
                    "reference/rpk/rpk-acl/rpk-acl-user-list",
                  ],
                }, //acl user
              ],
            }, //acl
            {
              type: "category",
              label: "rpk cluster",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-cluster/rpk-cluster",
              },
              items: [
                {
                  type: "category",
                  label: "rpk cluster config",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-config",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-config",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-edit",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-export",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-force-reset",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-get",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-import",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-lint",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-set",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-status",
                  ],
                },
                "reference/rpk/rpk-cluster/rpk-cluster-health",
                {
                  type: "category",
                  label: "rpk cluster license",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-license",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-license",
                    "reference/rpk/rpk-cluster/rpk-cluster-license-info",
                    "reference/rpk/rpk-cluster/rpk-cluster-license-set",
                  ],
                },
                {
                  type: "category",
                  label: "rpk cluster logdirs",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-logdirs",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-logdirs",
                    "reference/rpk/rpk-cluster/rpk-cluster-logdirs-describe",
                  ],
                },
                {
                  type: "category",
                  label: "rpk cluster maintenance",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-maintenance",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-maintenance",
                    "reference/rpk/rpk-cluster/rpk-cluster-maintenance-disable",
                    "reference/rpk/rpk-cluster/rpk-cluster-maintenance-enable",
                    "reference/rpk/rpk-cluster/rpk-cluster-maintenance-status",
                  ],
                },
                "reference/rpk/rpk-cluster/rpk-cluster-metadata",
                {
                  type: "category",
                  label: "rpk cluster partitions",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-partitions",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-partitions",
                    "reference/rpk/rpk-cluster/rpk-cluster-partitions-balancer-status",
                    "reference/rpk/rpk-cluster/rpk-cluster-partitions-movement-cancel",
                  ],
                },
              ],
            }, //acl cluster
            {
              type: "category",
              label: "rpk container",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-container/rpk-container",
              },
              items: [
                "reference/rpk/rpk-container/rpk-container",
                "reference/rpk/rpk-container/rpk-container-purge",
                "reference/rpk/rpk-container/rpk-container-start",
                "reference/rpk/rpk-container/rpk-container-stop",
              ],
            },
            {
              type: "category",
              label: "rpk debug",
              link: { type: "doc", id: "reference/rpk/rpk-debug/rpk-debug" },
              items: [
                "reference/rpk/rpk-debug/rpk-debug",
                "reference/rpk/rpk-debug/rpk-debug-bundle",
              ],
            },
            {
              type: "category",
              label: "rpk generate",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-generate/rpk-generate",
              },
              items: [
                "reference/rpk/rpk-generate/rpk-generate",
                "reference/rpk/rpk-generate/rpk-generate-grafana-dashboard",
                "reference/rpk/rpk-generate/rpk-generate-prometheus-config",
                "reference/rpk/rpk-generate/rpk-generate-shell-completion",
              ],
            },
            {
              type: "category",
              label: "rpk group",
              link: { type: "doc", id: "reference/rpk/rpk-group/rpk-group" },
              items: [
                "reference/rpk/rpk-group/rpk-group",
                "reference/rpk/rpk-group/rpk-group-delete",
                "reference/rpk/rpk-group/rpk-group-describe",
                "reference/rpk/rpk-group/rpk-group-list",
                "reference/rpk/rpk-group/rpk-group-seek",
              ],
            },
            "reference/rpk/rpk-help",
            "reference/rpk/rpk-iotune",
            {
              type: "category",
              label: "rpk plugin",
              link: { type: "doc", id: "reference/rpk/rpk-plugin/rpk-plugin" },
              items: [
                "reference/rpk/rpk-plugin/rpk-plugin",
                "reference/rpk/rpk-plugin/rpk-plugin-list",
                "reference/rpk/rpk-plugin/rpk-plugin-uninstall",
                "reference/rpk/rpk-plugin/rpk-plugin-install",
              ],
            },
            {
              type: "category",
              label: "rpk redpanda",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-redpanda/rpk-redpanda",
              },
              items: [
                "reference/rpk/rpk-redpanda/rpk-redpanda",
                {
                  type: "category",
                  label: "rpk redpanda admin",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin",
                  },
                  items: [
                    "reference/rpk/rpk-redpanda/rpk-redpanda-admin",
                    {
                      type: "category",
                      label: "rpk redpanda admin brokers",
                      link: {
                        type: "doc",
                        id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers",
                      },
                      items: [
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-decommission",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-list",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-recommission",
                      ],
                    },
                    {
                      type: "category",
                      label: "rpk redpanda admin config",
                      link: {
                        type: "doc",
                        id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config",
                      },
                      items: [
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-log-level-set",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-log-level",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-print",
                      ],
                    },
                    {
                      type: "category",
                      label: "rpk redpanda admin partitions",
                      link: {
                        type: "doc",
                        id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions",
                      },
                      items: [
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions-list",
                      ],
                    },
                  ],
                }, //rpk redpanda admin
                "reference/rpk/rpk-redpanda/rpk-redpanda-check",
                {
                  type: "category",
                  label: "rpk redpanda config",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-redpanda/rpk-redpanda-config",
                  },
                  items: [
                    "reference/rpk/rpk-redpanda/rpk-redpanda-config",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-config-bootstrap",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-config-init",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-config-set",
                  ],
                },
                "reference/rpk/rpk-redpanda/rpk-redpanda-mode",
                "reference/rpk/rpk-redpanda/rpk-redpanda-start",
                "reference/rpk/rpk-redpanda/rpk-redpanda-stop",
                {
                  type: "category",
                  label: "rpk redpanda tune",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-redpanda/rpk-redpanda-tune",
                  },
                  items: [
                    "reference/rpk/rpk-redpanda/rpk-redpanda-tune",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-tune-help",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-tune-list",
                  ],
                },
              ],
            }, //rpk redpanda
            {
              type: "category",
              label: "rpk topic",
              link: { type: "doc", id: "reference/rpk/rpk-topic/rpk-topic" },
              items: [
                "reference/rpk/rpk-topic/rpk-topic",
                "reference/rpk/rpk-topic/rpk-topic-add-partitions",
                "reference/rpk/rpk-topic/rpk-topic-alter-config",
                "reference/rpk/rpk-topic/rpk-topic-consume",
                "reference/rpk/rpk-topic/rpk-topic-create",
                "reference/rpk/rpk-topic/rpk-topic-delete",
                "reference/rpk/rpk-topic/rpk-topic-describe",
                "reference/rpk/rpk-topic/rpk-topic-list",
                "reference/rpk/rpk-topic/rpk-topic-produce",
              ],
            },
            "reference/rpk/rpk-version",
            {
              type: "category",
              label: "rpk wasm",
              link: { type: "doc", id: "reference/rpk/rpk-wasm/rpk-wasm" },
              items: [
                "reference/rpk/rpk-wasm/rpk-wasm",
                "reference/rpk/rpk-wasm/rpk-wasm-deploy",
                "reference/rpk/rpk-wasm/rpk-wasm-generate",
                "reference/rpk/rpk-wasm/rpk-wasm-remove",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Redpanda Operator",
          link: { type: "doc", id: "reference/redpanda-operator/index" },
          items: [
            {
              type: "category",
              label: "Install",
              items: [
                "reference/redpanda-operator/kubernetes-qs-local-access",
                "reference/redpanda-operator/kubernetes-qs-minikube",
                "reference/redpanda-operator/kubernetes-qs-cloud",
              ],
            },
            {
              type: "category",
              label: "Deploy",
              items: [
                "reference/redpanda-operator/kubernetes-connectivity",
                "reference/redpanda-operator/kubernetes-external-connect",
                "reference/redpanda-operator/kubernetes-additional-config",
                "reference/redpanda-operator/arbitrary-configuration",
              ],
            },
            {
              type: "category",
              label: "Security",
              items: [
                "reference/redpanda-operator/security-kubernetes",
                "reference/redpanda-operator/tls-kubernetes",
                "reference/redpanda-operator/kubernetes-sasl",
                "reference/redpanda-operator/kubernetes-mtls",
              ],
            },

            {
              type: "link",
              label: "Operator Custom Resource Definition (CRD)",
              href: "https://doc.crds.dev/github.com/vectorizedio/redpanda",
            },
          ],
        },
        "reference/internal-metrics",
        {
          type: "link",
          label: "Release notes",
          href: "https://github.com/redpanda-data/redpanda/releases",
        },
      ],
    },
    {
      type: "doc",
      id: "support",
    },
  ],
};
