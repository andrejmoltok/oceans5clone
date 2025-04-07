- [x] setup auth0 package
- [ ] setup user management with auth0
  - [ ] upon user registration redirect user to create player profile
  - [ ] copy auth0 user id into player5 table and fill the rest of the fields
- [x] update prisma schema based on atuh0 setup
- [ ] create profile page fully
- [ ] create lobby page fully with socket.io
- [ ] create game page fully basd on [GamePlay](./Gameplay.md) docs
- [ ] create leaderboard page fully
- [ ] create support page fully
- [ ] create contact page fully


# Auth0 Profile

`  id         Int       @id @default(autoincrement()) @db.UnsignedInt
  username   String    @db.VarChar(100)
  email      String    @db.VarChar(100)
  firstname  String    @db.VarChar(100)
  lastname   String?   @db.VarChar(100)
  role       String    @default("player") @db.VarChar(100)
  birthYear  Int?      @default(1934) @db.UnsignedInt
  gender     String?   @db.VarChar(50)
  location   String?   @db.VarChar(100)
  lastActive DateTime? @default(now()) @db.Timestamp(0)
  createdAt  DateTime  @default(now()) @db.Timestamp(0)`