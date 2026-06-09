import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Add Tags To Certificate",
					"value": "Add Tags To Certificate",
					"action": "Add Tags To Certificate",
					"description": "<p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a <code>key</code> and an optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. </p> <p>You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/tags.html\">Tagging ACM certificates</a>. </p> <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.AddTagsToCertificate"
						}
					}
				},
				{
					"name": "Delete Certificate",
					"value": "Delete Certificate",
					"action": "Delete Certificate",
					"description": "<p>Deletes a certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by Amazon Web Services services integrated with ACM. </p> <note> <p>You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, the certificate association must first be removed.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.DeleteCertificate"
						}
					}
				},
				{
					"name": "Describe Certificate",
					"value": "Describe Certificate",
					"action": "Describe Certificate",
					"description": "<p>Returns detailed metadata about the specified ACM certificate.</p> <p>If you have just created a certificate using the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about it.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.DescribeCertificate"
						}
					}
				},
				{
					"name": "Export Certificate",
					"value": "Export Certificate",
					"action": "Export Certificate",
					"description": "<p>Exports a private certificate issued by a private certificate authority (CA) for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private 2048-bit RSA key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it. </p> <p>For information about exporting and formatting a certificate using the ACM console or CLI, see <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html\">Export a Private Certificate</a>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.ExportCertificate"
						}
					}
				},
				{
					"name": "Get Account Configuration",
					"value": "Get Account Configuration",
					"action": "Get Account Configuration",
					"description": "Returns the account configuration options associated with an Amazon Web Services account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.GetAccountConfiguration"
						}
					}
				},
				{
					"name": "Get Certificate",
					"value": "Get Certificate",
					"action": "Get Certificate",
					"description": "Retrieves an Amazon-issued certificate and its certificate chain. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use <a href=\"https://wiki.openssl.org/index.php/Command_Line_Utilities\">OpenSSL</a> to decode the certificates and inspect individual fields.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.GetCertificate"
						}
					}
				},
				{
					"name": "Import Certificate",
					"value": "Import Certificate",
					"action": "Import Certificate",
					"description": "<p>Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html\">integrated services</a> allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html\">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p> <note> <p>ACM does not provide <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html\">managed renewal</a> for certificates that you import.</p> </note> <p>Note the following guidelines when importing third party certificates:</p> <ul> <li> <p>You must enter the private key that matches the certificate you are importing.</p> </li> <li> <p>The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.</p> </li> <li> <p>The private key must be no larger than 5 KB (5,120 bytes).</p> </li> <li> <p>If the certificate you are importing is not self-signed, you must enter its certificate chain.</p> </li> <li> <p>If a certificate chain is included, the issuer must be the subject of one of the certificates in the chain.</p> </li> <li> <p>The certificate, private key, and certificate chain must be PEM-encoded.</p> </li> <li> <p>The current time must be between the <code>Not Before</code> and <code>Not After</code> certificate fields.</p> </li> <li> <p>The <code>Issuer</code> field must not be empty.</p> </li> <li> <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p> </li> <li> <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include this argument only when you want to replace a previously imported certificate.</p> </li> <li> <p>When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by <code>fileb://</code>. For example, you can specify a certificate saved in the <code>C:\\temp</code> folder as <code>fileb://C:\\temp\\certificate_to_import.pem</code>. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs. </p> </li> <li> <p>When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you're using. </p> </li> <li> <p>The cryptographic algorithm of an imported certificate must match the algorithm of the signing CA. For example, if the signing CA key type is RSA, then the certificate key type must also be RSA.</p> </li> </ul> <p>This operation returns the <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Name (ARN)</a> of the imported certificate.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.ImportCertificate"
						}
					}
				},
				{
					"name": "List Certificates",
					"value": "List Certificates",
					"action": "List Certificates",
					"description": "Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only <code>RSA_2048</code> certificates. For more information, see <a>Filters</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.ListCertificates"
						}
					}
				},
				{
					"name": "List Tags For Certificate",
					"value": "List Tags For Certificate",
					"action": "List Tags For Certificate",
					"description": "Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.ListTagsForCertificate"
						}
					}
				},
				{
					"name": "Put Account Configuration",
					"value": "Put Account Configuration",
					"action": "Put Account Configuration",
					"description": "<p>Adds or modifies account-level configurations in ACM. </p> <p>The supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the number of days prior to certificate expiration when ACM starts generating <code>EventBridge</code> events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.PutAccountConfiguration"
						}
					}
				},
				{
					"name": "Remove Tags From Certificate",
					"value": "Remove Tags From Certificate",
					"action": "Remove Tags From Certificate",
					"description": "<p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. </p> <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate"
						}
					}
				},
				{
					"name": "Renew Certificate",
					"value": "Renew Certificate",
					"action": "Renew Certificate",
					"description": "Renews an eligible ACM certificate. At this time, only exported private certificates can be renewed with this operation. In order to renew your Amazon Web Services Private CA certificates with ACM, you must first <a href=\"https://docs.aws.amazon.com/privateca/latest/userguide/PcaPermissions.html\">grant the ACM service principal permission to do so</a>. For more information, see <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html\">Testing Managed Renewal</a> in the ACM User Guide.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.RenewCertificate"
						}
					}
				},
				{
					"name": "Request Certificate",
					"value": "Request Certificate",
					"action": "Request Certificate",
					"description": "<p>Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the <code>DomainName</code> parameter. You can also specify additional FQDNs in the <code>SubjectAlternativeNames</code> parameter. </p> <p>If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html\">DNS validation</a> or <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html\">email validation</a>. We recommend that you use DNS validation. ACM issues public certificates after receiving approval from the domain owner. </p> <note> <p>ACM behavior differs from the <a href=\"https://datatracker.ietf.org/doc/html/rfc6125#appendix-B.2\">RFC 6125</a> specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN).</p> </note> <p>After successful completion of the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about the new certificate.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.RequestCertificate"
						}
					}
				},
				{
					"name": "Resend Validation Email",
					"value": "Resend Validation Email",
					"action": "Resend Validation Email",
					"description": "Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking <b>I Approve</b>. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html\">Configure Email for your Domain</a>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.ResendValidationEmail"
						}
					}
				},
				{
					"name": "Update Certificate Options",
					"value": "Update Certificate Options",
					"action": "Update Certificate Options",
					"description": "Updates a certificate. Currently, you can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log. For more information, see <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency\"> Opting Out of Certificate Transparency Logging</a>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CertificateManager.UpdateCertificateOptions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.AddTagsToCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Add Tags To Certificate"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.AddTagsToCertificate",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Add Tags To Certificate",
					"value": "CertificateManager.AddTagsToCertificate"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Add Tags To Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Certificate Arn",
			"name": "CertificateArn",
			"type": "string",
			"default": "",
			"description": "<p>String that contains the ARN of the ACM certificate to which the tag is to be applied. This must be of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Names (ARNs)</a>.</p>",
			"routing": {
				"send": {
					"property": "CertificateArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Add Tags To Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "The key-value pair that defines the tag. The tag value is optional.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Add Tags To Certificate"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Add Tags To Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.DeleteCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Certificate"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.DeleteCertificate",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Delete Certificate",
					"value": "CertificateManager.DeleteCertificate"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Certificate Arn",
			"name": "CertificateArn",
			"type": "string",
			"default": "",
			"description": "<p>String that contains the ARN of the ACM certificate to be deleted. This must be of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Names (ARNs)</a>.</p>",
			"routing": {
				"send": {
					"property": "CertificateArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Certificate"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.DescribeCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Certificate"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.DescribeCertificate",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Describe Certificate",
					"value": "CertificateManager.DescribeCertificate"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Certificate Arn",
			"name": "CertificateArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name (ARN) of the ACM certificate. The ARN must have the following form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Names (ARNs)</a>.</p>",
			"routing": {
				"send": {
					"property": "CertificateArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Certificate"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.ExportCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Export Certificate"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.ExportCertificate",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Export Certificate",
					"value": "CertificateManager.ExportCertificate"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Export Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Certificate Arn",
			"name": "CertificateArn",
			"type": "string",
			"default": "",
			"description": "<p>An Amazon Resource Name (ARN) of the issued certificate. This must be of the form:</p> <p> <code>arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012</code> </p>",
			"routing": {
				"send": {
					"property": "CertificateArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Export Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Passphrase",
			"name": "Passphrase",
			"type": "string",
			"default": "",
			"description": "<p>Passphrase to associate with the encrypted exported private key. </p> <note> <p>When creating your passphrase, you can use any ASCII character except #, $, or %.</p> </note> <p>If you want to later decrypt the private key, you must have the passphrase. You can use the following OpenSSL command to decrypt a private key. After entering the command, you are prompted for the passphrase.</p> <p> <code>openssl rsa -in encrypted_key.pem -out decrypted_key.pem</code> </p>",
			"routing": {
				"send": {
					"property": "Passphrase",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Export Certificate"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Export Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.GetAccountConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Account Configuration"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.GetAccountConfiguration",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Get Account Configuration",
					"value": "CertificateManager.GetAccountConfiguration"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Account Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Account Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.GetCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Certificate"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.GetCertificate",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Get Certificate",
					"value": "CertificateManager.GetCertificate"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Certificate Arn",
			"name": "CertificateArn",
			"type": "string",
			"default": "",
			"description": "<p>String that contains a certificate ARN in the following format:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Names (ARNs)</a>.</p>",
			"routing": {
				"send": {
					"property": "CertificateArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Certificate"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.ImportCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Certificate"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.ImportCertificate",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Import Certificate",
					"value": "CertificateManager.ImportCertificate"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Certificate"
					]
				}
			}
		},
		{
			"displayName": "Certificate Arn",
			"name": "CertificateArn",
			"type": "string",
			"default": "",
			"description": "The <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Name (ARN)</a> of an imported certificate to replace. To import a new certificate, omit this field. ",
			"routing": {
				"send": {
					"property": "CertificateArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Certificate",
			"name": "Certificate",
			"type": "string",
			"default": "",
			"description": "The certificate to import.",
			"routing": {
				"send": {
					"property": "Certificate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Private Key",
			"name": "PrivateKey",
			"type": "string",
			"default": "",
			"description": "The private key that matches the public key in the certificate.",
			"routing": {
				"send": {
					"property": "PrivateKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Certificate"
					]
				}
			}
		},
		{
			"displayName": "Certificate Chain",
			"name": "CertificateChain",
			"type": "string",
			"default": "",
			"description": "The PEM encoded certificate chain.",
			"routing": {
				"send": {
					"property": "CertificateChain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Certificate"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "<p>One or more resource tags to associate with the imported certificate. </p> <p>Note: You cannot apply tags when reimporting a certificate.</p>",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Certificate"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.ListCertificates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.ListCertificates",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager List Certificates",
					"value": "CertificateManager.ListCertificates"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Certificate Statuses",
			"name": "CertificateStatuses",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Filter the certificate list by status value.",
			"routing": {
				"send": {
					"property": "CertificateStatuses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Includes",
			"name": "Includes",
			"type": "json",
			"default": "{\n  \"extendedKeyUsage\": [\n    null\n  ],\n  \"keyUsage\": {},\n  \"keyTypes\": {}\n}",
			"description": "Filter the certificate list. For more information, see the <a>Filters</a> structure.",
			"routing": {
				"send": {
					"property": "Includes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Use this parameter only when paginating results and only in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the response you just received.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"type": "number",
			"default": 0,
			"description": "Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the <code>NextToken</code> element is sent in the response. Use this <code>NextToken</code> value in a subsequent request to retrieve additional items.",
			"routing": {
				"send": {
					"property": "MaxItems",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "SortBy",
			"type": "options",
			"default": "CREATED_AT",
			"description": "Specifies the field to sort results by. If you specify <code>SortBy</code>, you must also specify <code>SortOrder</code>.",
			"options": [
				{
					"name": "CREATED AT",
					"value": "CREATED_AT"
				}
			],
			"routing": {
				"send": {
					"property": "SortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "SortOrder",
			"type": "options",
			"default": "ASCENDING",
			"description": "Specifies the order of sorted results. If you specify <code>SortOrder</code>, you must also specify <code>SortBy</code>.",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"property": "SortOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.ListTagsForCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Certificate"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.ListTagsForCertificate",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager List Tags For Certificate",
					"value": "CertificateManager.ListTagsForCertificate"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Certificate Arn",
			"name": "CertificateArn",
			"type": "string",
			"default": "",
			"description": "<p>String that contains the ARN of the ACM certificate for which you want to list the tags. This must have the following form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Names (ARNs)</a>.</p>",
			"routing": {
				"send": {
					"property": "CertificateArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Certificate"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.PutAccountConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Account Configuration"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.PutAccountConfiguration",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Put Account Configuration",
					"value": "CertificateManager.PutAccountConfiguration"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Account Configuration"
					]
				}
			}
		},
		{
			"displayName": "Expiry Events",
			"name": "ExpiryEvents",
			"type": "json",
			"default": "{}",
			"description": "Specifies expiration events associated with an account.",
			"routing": {
				"send": {
					"property": "ExpiryEvents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Account Configuration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Idempotency Token",
			"name": "IdempotencyToken",
			"type": "string",
			"default": "",
			"description": "Customer-chosen string used to distinguish between calls to <code>PutAccountConfiguration</code>. Idempotency tokens time out after one hour. If you call <code>PutAccountConfiguration</code> multiple times with the same unexpired idempotency token, ACM treats it as the same request and returns the original result. If you change the idempotency token for each call, ACM treats each call as a new request.",
			"routing": {
				"send": {
					"property": "IdempotencyToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Account Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Account Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Remove Tags From Certificate"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.RemoveTagsFromCertificate",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Remove Tags From Certificate",
					"value": "CertificateManager.RemoveTagsFromCertificate"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Remove Tags From Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Certificate Arn",
			"name": "CertificateArn",
			"type": "string",
			"default": "",
			"description": "<p>String that contains the ARN of the ACM Certificate with one or more tags that you want to remove. This must be of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Names (ARNs)</a>.</p>",
			"routing": {
				"send": {
					"property": "CertificateArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Remove Tags From Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "The key-value pair that defines the tag to remove.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Remove Tags From Certificate"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Remove Tags From Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.RenewCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Renew Certificate"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.RenewCertificate",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Renew Certificate",
					"value": "CertificateManager.RenewCertificate"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Renew Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Certificate Arn",
			"name": "CertificateArn",
			"type": "string",
			"default": "",
			"description": "<p>String that contains the ARN of the ACM certificate to be renewed. This must be of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Names (ARNs)</a>.</p>",
			"routing": {
				"send": {
					"property": "CertificateArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Renew Certificate"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Renew Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.RequestCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Request Certificate"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.RequestCertificate",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Request Certificate",
					"value": "CertificateManager.RequestCertificate"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Request Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Domain Name",
			"name": "DomainName",
			"type": "string",
			"default": "",
			"description": "<p>Fully qualified domain name (FQDN), such as www.example.com, that you want to secure with an ACM certificate. Use an asterisk (*) to create a wildcard certificate that protects several sites in the same domain. For example, *.example.com protects www.example.com, site.example.com, and images.example.com. </p> <p>In compliance with <a href=\"https://datatracker.ietf.org/doc/html/rfc5280\">RFC 5280</a>, the length of the domain name (technically, the Common Name) that you provide cannot exceed 64 octets (characters), including periods. To add a longer domain name, specify it in the Subject Alternative Name field, which supports names up to 253 octets in length. </p>",
			"routing": {
				"send": {
					"property": "DomainName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Request Certificate"
					]
				}
			}
		},
		{
			"displayName": "Validation Method",
			"name": "ValidationMethod",
			"type": "options",
			"default": "EMAIL",
			"description": "The method you want to use if you are requesting a public certificate to validate that you own or control domain. You can <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html\">validate with DNS</a> or <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html\">validate with email</a>. We recommend that you use DNS validation. ",
			"options": [
				{
					"name": "EMAIL",
					"value": "EMAIL"
				},
				{
					"name": "DNS",
					"value": "DNS"
				}
			],
			"routing": {
				"send": {
					"property": "ValidationMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Request Certificate"
					]
				}
			}
		},
		{
			"displayName": "Subject Alternative Names",
			"name": "SubjectAlternativeNames",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "<p>Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. For example, add the name www.example.net to a certificate for which the <code>DomainName</code> field is www.example.com if users can reach your site by using either name. The maximum number of domain names that you can add to an ACM certificate is 100. However, the initial quota is 10 domain names. If you need more than 10 names, you must request a quota increase. For more information, see <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html\">Quotas</a>.</p> <p> The maximum length of a SAN DNS name is 253 octets. The name is made up of multiple labels separated by periods. No label can be longer than 63 octets. Consider the following examples: </p> <ul> <li> <p> <code>(63 octets).(63 octets).(63 octets).(61 octets)</code> is legal because the total length is 253 octets (63+1+63+1+63+1+61) and no label exceeds 63 octets.</p> </li> <li> <p> <code>(64 octets).(63 octets).(63 octets).(61 octets)</code> is not legal because the total length exceeds 253 octets (64+1+63+1+63+1+61) and the first label exceeds 63 octets.</p> </li> <li> <p> <code>(63 octets).(63 octets).(63 octets).(62 octets)</code> is not legal because the total length of the DNS name (63+1+63+1+63+1+62) exceeds 253 octets.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "SubjectAlternativeNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Request Certificate"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Token",
			"name": "IdempotencyToken",
			"type": "string",
			"default": "",
			"description": "Customer chosen string that can be used to distinguish between calls to <code>RequestCertificate</code>. Idempotency tokens time out after one hour. Therefore, if you call <code>RequestCertificate</code> multiple times with the same idempotency token within one hour, ACM recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, ACM recognizes that you are requesting multiple certificates.",
			"routing": {
				"send": {
					"property": "IdempotencyToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Request Certificate"
					]
				}
			}
		},
		{
			"displayName": "Domain Validation Options",
			"name": "DomainValidationOptions",
			"type": "json",
			"default": "[\n  {\n    \"ValidationDomain\": {}\n  }\n]",
			"description": "The domain name that you want ACM to use to send you emails so that you can validate domain ownership.",
			"routing": {
				"send": {
					"property": "DomainValidationOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Request Certificate"
					]
				}
			}
		},
		{
			"displayName": "Options",
			"name": "Options",
			"type": "json",
			"default": "{}",
			"description": "Currently, you can use this parameter to specify whether to add the certificate to a certificate transparency log. Certificate transparency makes it possible to detect SSL/TLS certificates that have been mistakenly or maliciously issued. Certificates that have not been logged typically produce an error message in a browser. For more information, see <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency\">Opting Out of Certificate Transparency Logging</a>.",
			"routing": {
				"send": {
					"property": "Options",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Request Certificate"
					]
				}
			}
		},
		{
			"displayName": "Certificate Authority Arn",
			"name": "CertificateAuthorityArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate. If you do not provide an ARN and you are trying to request a private certificate, ACM will attempt to issue a public certificate. For more information about private CAs, see the <a href=\"https://docs.aws.amazon.com/privateca/latest/userguide/PcaWelcome.html\">Amazon Web Services Private Certificate Authority</a> user guide. The ARN must have the following form: </p> <p> <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code> </p>",
			"routing": {
				"send": {
					"property": "CertificateAuthorityArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Request Certificate"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "One or more resource tags to associate with the certificate.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Request Certificate"
					]
				}
			}
		},
		{
			"displayName": "Key Algorithm",
			"name": "KeyAlgorithm",
			"type": "options",
			"default": "RSA_1024",
			"description": "<p>Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data. RSA is the default key algorithm for ACM certificates. Elliptic Curve Digital Signature Algorithm (ECDSA) keys are smaller, offering security comparable to RSA keys but with greater computing efficiency. However, ECDSA is not supported by all network clients. Some AWS services may require RSA keys, or only support ECDSA keys of a particular size, while others allow the use of either RSA and ECDSA keys to ensure that compatibility is not broken. Check the requirements for the AWS service where you plan to deploy your certificate.</p> <p>Default: RSA_2048</p>",
			"options": [
				{
					"name": "RSA 1024",
					"value": "RSA_1024"
				},
				{
					"name": "RSA 2048",
					"value": "RSA_2048"
				},
				{
					"name": "RSA 3072",
					"value": "RSA_3072"
				},
				{
					"name": "RSA 4096",
					"value": "RSA_4096"
				},
				{
					"name": "EC Prime 256 V 1",
					"value": "EC_prime256v1"
				},
				{
					"name": "EC Secp 384 R 1",
					"value": "EC_secp384r1"
				},
				{
					"name": "EC Secp 521 R 1",
					"value": "EC_secp521r1"
				}
			],
			"routing": {
				"send": {
					"property": "KeyAlgorithm",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Request Certificate"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Request Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.ResendValidationEmail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Resend Validation Email"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.ResendValidationEmail",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Resend Validation Email",
					"value": "CertificateManager.ResendValidationEmail"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Resend Validation Email"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Certificate Arn",
			"name": "CertificateArn",
			"type": "string",
			"default": "",
			"description": "<p>String that contains the ARN of the requested certificate. The certificate ARN is generated and returned by the <a>RequestCertificate</a> action as soon as the request is made. By default, using this parameter causes email to be sent to all top-level domains you specified in the certificate request. The ARN must be of the form: </p> <p> <code>arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p>",
			"routing": {
				"send": {
					"property": "CertificateArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Resend Validation Email"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Domain",
			"name": "Domain",
			"type": "string",
			"default": "",
			"description": "The fully qualified domain name (FQDN) of the certificate that needs to be validated.",
			"routing": {
				"send": {
					"property": "Domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Resend Validation Email"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Validation Domain",
			"name": "ValidationDomain",
			"type": "string",
			"default": "",
			"description": "<p>The base validation domain that will act as the suffix of the email addresses that are used to send the emails. This must be the same as the <code>Domain</code> value or a superdomain of the <code>Domain</code> value. For example, if you requested a certificate for <code>site.subdomain.example.com</code> and specify a <b>ValidationDomain</b> of <code>subdomain.example.com</code>, ACM sends email to the domain registrant, technical contact, and administrative contact in WHOIS and the following five addresses:</p> <ul> <li> <p>admin@subdomain.example.com</p> </li> <li> <p>administrator@subdomain.example.com</p> </li> <li> <p>hostmaster@subdomain.example.com</p> </li> <li> <p>postmaster@subdomain.example.com</p> </li> <li> <p>webmaster@subdomain.example.com</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ValidationDomain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Resend Validation Email"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Resend Validation Email"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CertificateManager.UpdateCertificateOptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Certificate Options"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CertificateManager.UpdateCertificateOptions",
			"type": "options",
			"options": [
				{
					"name": "Certificate Manager Update Certificate Options",
					"value": "CertificateManager.UpdateCertificateOptions"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Certificate Options"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Certificate Arn",
			"name": "CertificateArn",
			"type": "string",
			"default": "",
			"description": "<p>ARN of the requested certificate to update. This must be of the form:</p> <p> <code>arn:aws:acm:us-east-1:<i>account</i>:certificate/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>",
			"routing": {
				"send": {
					"property": "CertificateArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Certificate Options"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Options",
			"name": "Options",
			"type": "json",
			"default": "{}",
			"description": "Use to update the options for your certificate. Currently, you can specify whether to add your certificate to a transparency log. Certificate transparency makes it possible to detect SSL/TLS certificates that have been mistakenly or maliciously issued. Certificates that have not been logged typically produce an error message in a browser. ",
			"routing": {
				"send": {
					"property": "Options",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Certificate Options"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Certificate Options"
					]
				}
			}
		},
];
