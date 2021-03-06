USE [CSETWeb]
GO
/****** Object:  Table [dbo].[FRAMEWORK_TIER_TYPE]    Script Date: 11/14/2018 3:57:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FRAMEWORK_TIER_TYPE](
	[TierType] [varchar](50) NOT NULL,
 CONSTRAINT [PK_FRAMEWORK_TIER_TYPE] PRIMARY KEY CLUSTERED 
(
	[TierType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[FRAMEWORK_TIER_TYPE] ([TierType]) VALUES (N'External Participation')
INSERT [dbo].[FRAMEWORK_TIER_TYPE] ([TierType]) VALUES (N'Integrated Risk Management Program')
INSERT [dbo].[FRAMEWORK_TIER_TYPE] ([TierType]) VALUES (N'Risk Management Process')
