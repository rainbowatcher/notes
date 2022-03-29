# 系统管理

## 用户管理

### 创建用户

```shell
useradd rdedu01
useradd rdedu02
```

### 删除用户

```shell
userdel [-r] rdedu01
        -r：删除时是否同时删除家目录
# 手动删除相关目录
rm -rf /var/spool/mail/test
rm -rf /home/test
userdel test
```

### 设置密码

```shell
passwd rdedu
```

### 切换用户

```shell
su - root
```

### 组管理

### 创建组

```shell
groupadd
```

### 删除组

```shell
groupdel
```

### 更改组

```shell
chgrp
```
